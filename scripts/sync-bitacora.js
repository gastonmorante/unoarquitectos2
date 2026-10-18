#!/usr/bin/env node
/**
 * UNO Arquitectos - Node.js Google Drive 24h Sync Utility
 * Usage: node scripts/sync-bitacora.js [--force]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const cacheFilePath = path.join(rootDir, 'public', 'data', 'bitacora-cache.json');
const folderId = '16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby';
const driveUrl = `https://drive.google.com/drive/folders/${folderId}?usp=sharing`;
const spreadsheetId = '1IyMbTsCjOxNq41nQZj9GyH5l6OadUPHo651sXOWw-QA';

async function syncDrive() {
  console.log(`[Sync] Connecting to Google Drive (${driveUrl})...`);
  try {
    const res = await fetch(driveUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
      }
    });

    if (!res.ok) {
      throw new Error(`Drive HTTP error ${res.status}: ${res.statusText}`);
    }

    const html = await res.text();
    console.log(`[Sync] Received ${html.length} bytes from Drive page.`);

    // Extract PDF files and IDs
    const regex = /aria-label="([^"]+\.pdf[^"]*)"[^>]*ssk=['"][^'"]*?:([a-zA-Z0-9_-]{25,50})-0-16/gi;
    let match;
    const foundPdfs = {};

    while ((match = regex.exec(html)) !== null) {
      const rawLabel = match[1];
      const fileId = match[2];
      const cleanName = rawLabel.replace(/\s+PDF\s+Shared.*$/i, '').trim();
      const sMatch = cleanName.match(/S(\d+)/i);
      if (sMatch) {
        const sNum = parseInt(sMatch[1], 10);
        foundPdfs[sNum] = {
          fileName: cleanName,
          fileId: fileId,
          driveUrl: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
        };
      }
    }

    console.log(`[Sync] Discovered ${Object.keys(foundPdfs).length} weekly PDF reports in Drive.`);

    let cacheData = { entries: [] };
    if (fs.existsSync(cacheFilePath)) {
      cacheData = JSON.parse(fs.readFileSync(cacheFilePath, 'utf8'));
    }

    let updatedCount = 0;
    for (const [sNum, pdfInfo] of Object.entries(foundPdfs)) {
      for (const entry of cacheData.entries) {
        if (entry.id.includes(`s${sNum}`) || entry.entryNumber.includes(`S${sNum}`)) {
          if (!entry.pdfDriveUrl || entry.pdfDriveUrl !== pdfInfo.driveUrl) {
            entry.pdfDriveUrl = pdfInfo.driveUrl;
            entry.pdfFileName = pdfInfo.fileName;
            updatedCount++;
          }
          break;
        }
      }
    }

    const now = new Date();
    cacheData.lastSync = now.toISOString();
    cacheData.lastCheckTimestamp = Math.floor(now.getTime() / 1000);
    cacheData.checkIntervalHours = 24;
    cacheData.nextCheckDue = new Date(now.getTime() + 24 * 3600 * 1000).toISOString();
    cacheData.totalEntries = cacheData.entries.length;
    cacheData.latestEntry = cacheData.entries[cacheData.entries.length - 1];

    fs.mkdirSync(path.dirname(cacheFilePath), { recursive: true });
    fs.writeFileSync(cacheFilePath, JSON.stringify(cacheData, null, 2), 'utf8');

    console.log(`[Sync] Updated cache file at ${cacheFilePath} (${cacheData.totalEntries} entries, ${updatedCount} links updated).`);
    console.log(`[Sync] Next scheduled check due in 24 hours: ${cacheData.nextCheckDue}`);
  } catch (err) {
    console.error(`[Sync Error]`, err);
  }
}

syncDrive();
