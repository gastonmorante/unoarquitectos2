import urllib.request
import urllib.error
import json
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'es-MX,es;q=0.9,en;q=0.8',
    'Connection': 'keep-alive'
}

print('=== 1. TEST CONTACT FORM API (POST /api/contact) ===')
try:
    post_headers = dict(headers)
    post_headers['Content-Type'] = 'application/json'
    post_headers['Accept'] = 'application/json'
    req = urllib.request.Request(
        'https://unoarquitectos.com/api/contact',
        data=json.dumps({
            'name': 'Auditor Tecnico Real',
            'email': 'auditor@test.com',
            'phone': '+52 984 123 4567',
            'message': 'Prueba tecnica en vivo de recepcion de leads y CRM GoHighLevel',
            'language': 'es',
            'projectType': 'Residencial Tulum'
        }).encode('utf-8'),
        headers=post_headers
    )
    with urllib.request.urlopen(req) as resp:
        print('Status:', resp.status)
        print('Response Body:', resp.read().decode('utf-8'))
except Exception as e:
    print('Form Error:', e)

print('\n=== 2. TEST MULTILINGUAL STATIC HTML PAGES ===')
for lang in ['en', 'it', 'fr']:
    url = f'https://unoarquitectos.com/{lang}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8')
            title = re.search(r'<title>(.*?)</title>', html)
            html_tag = re.search(r'<html[^>]*>', html)
            t_str = title.group(1) if title else 'N/A'
            h_str = html_tag.group(0) if html_tag else 'N/A'
            print(f'{lang.upper()} Status: {resp.status} | Tag: {h_str} | Title: {t_str}')
    except Exception as e:
        print(f'{lang.upper()} Error:', e)

print('\n=== 3. TEST SUBPAGES & REDIRECTS (301) & 404 ===')
class CustomOpener(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, hdrs, newurl):
        return None

opener = urllib.request.build_opener(CustomOpener)
for u in [
    'https://unoarquitectos.com/arquitectos-en-tulum',
    'https://unoarquitectos.com/arquitectos-en-quintana-roo',
    'https://unoarquitectos.com/blog',
    'https://unoarquitectos.com/about',
    'https://unoarquitectos.com/services',
    'https://unoarquitectos.com/en/architects-in-playa-del-carmen/',
    'https://unoarquitectos.com/esta-ruta-no-existe-xyz-404'
]:
    try:
        req = urllib.request.Request(u, headers=headers)
        resp = opener.open(req)
        print(f'{u} -> Status: {resp.status}')
    except urllib.error.HTTPError as e:
        loc = e.headers.get('Location', '')
        print(f'{u} -> Status: {e.code} (Redirect: {loc})')
    except Exception as e:
        print(f'{u} -> Error: {e}')

print('\n=== 4. TEST SITEMAP & ROBOTS ===')
try:
    req = urllib.request.Request('https://unoarquitectos.com/sitemap.xml', headers=headers)
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8')
        count = len(re.findall(r'<url>', content))
        print(f'Sitemap.xml -> Status: {resp.status} | URLs Declaradas: {count}')
except Exception as e:
    print('Sitemap Error:', e)

try:
    req = urllib.request.Request('https://unoarquitectos.com/robots.txt', headers=headers)
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8')
        print(f'Robots.txt -> Status: {resp.status} | Contenido:\n{content.strip()}')
except Exception as e:
    print('Robots Error:', e)
