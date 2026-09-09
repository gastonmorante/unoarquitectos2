import os
import glob
import re

scratch_dir = r"C:\Users\PC\.gemini\antigravity\brain\5ab180b8-2095-4ad9-ba63-ca7cdee2bfd8\scratch"

for filepath in glob.glob(os.path.join(scratch_dir, "*.html")):
    print("==================================================")
    print("FILE:", os.path.basename(filepath))
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        text = f.read()
    
    title = re.search(r"<title>(.*?)</title>", text)
    if title:
        print("TITLE:", title.group(1))
    
    labels = set(re.findall(r'aria-label="([^"]+)"', text))
    item_labels = [l for l in labels if not l.startswith("Google") and not l.startswith("Search") and not l.startswith("Navigation") and not l.startswith("Main") and not l.startswith("Side")]
    print(f"Items found ({len(item_labels)}):")
    for l in sorted(item_labels):
        print("  -", l)
