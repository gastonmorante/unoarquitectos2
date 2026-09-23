import os
import urllib.request
import json
import time

items = [
    ('1lQ6lsMB863dS9jVPIyv7_ABjhTKEJoWc', 'scene_190926_01.jpg', 'Punto #01 • Acceso Principal & Vestíbulo de Obra', 'Vestíbulo Principal'),
    ('1UygeuQYA7hDtHwPzICxGHMUHPly1a0K6', 'scene_190926_02.jpg', 'Punto #02 • Estancia Principal & Doble Altura en Chukum', 'Estancia Principal'),
    ('1VEFWcQcKkKvqZyjw2QpVCbzqrXEHthaL', 'scene_190926_03.jpg', 'Punto #03 • Área de Comedor & Conexión Exterior', 'Comedor'),
    ('1BccbKSI1HozDPvWXFzpcS4e7MeHf9f2v', 'scene_190926_04.jpg', 'Punto #04 • Cocina Integral & Preparaciones MEP', 'Cocina'),
    ('1gBEgxKFI_4Of9FwC5KJvWSG_FH8bI8R_', 'scene_190926_05.jpg', 'Punto #05 • Terraza Exterior & Alberca Cenote', 'Terraza & Alberca'),
    ('1ocbHjNzm_IWrigX9RRq7EZkUy2hze7_N', 'scene_190926_06.jpg', 'Punto #06 • Asoleadero & Muros de Chukum', 'Asoleadero'),
    ('14Rqckh2LYOHBicgX7kRQZmiRD0PQqeX7', 'scene_190926_07.jpg', 'Punto #07 • Núcleo de Escalera Escultórica', 'Escaleras Nivel 1'),
    ('1Onb-d2W-qUVE4_0OiKBAIRo5IVfCDjFh', 'scene_190926_08.jpg', 'Punto #08 • Pasillo de Distribución Planta Alta', 'Pasillo Nivel 2'),
    ('1T6d8DYjarKQHI8xF5e0IuKdDO30lV4RD', 'scene_190926_09.jpg', 'Punto #09 • Master Suite Principal & Vista Panorámica', 'Master Suite Nivel 2'),
    ('1pzcgoN8W85vqTCSC-MbMBJFIL6F1TGsG', 'scene_190926_10.jpg', 'Punto #10 • Baño Master Suite & Tina de Chukum', 'Baño Master'),
    ('1TWcPTgsCcWWfT_f6Tb3XMAOVGLdPyJIW', 'scene_190926_11.jpg', 'Punto #11 • Vestidor Master & Carpintería Tzalam', 'Vestidor Master'),
    ('1Un73QYes60-TcLHv2RGY7pUzpDoxFX6J', 'scene_190926_12.jpg', 'Punto #12 • Recámara Secundaria 1 & Vista a Selva', 'Recámara 1'),
    ('1z4y81sGikSFPlfzKACEKHMRgSOPsyDIF', 'scene_190926_13.jpg', 'Punto #13 • Baño Recámara 1 & Mármol Travertino', 'Baño Recámara 1'),
    ('1DHgTBTWKj6a4XkhmuTCxrGlL9INJkHhG', 'scene_190926_14.jpg', 'Punto #14 • Recámara Secundaria 2 & Acabados Finales', 'Recámara 2'),
    ('15ywckP4nYFTzcodxRj9CHZ6SLeJ02bV7', 'scene_190926_15.jpg', 'Punto #15 • Baño Recámara 2 & Instalaciones', 'Baño Recámara 2'),
    ('1oeoGez_4GS7-nv5T9OuNq7aCkvSyPJma', 'scene_190926_16.jpg', 'Punto #16 • Terraza Volada Superior & Barandales', 'Terraza Nivel 2'),
    ('1ROJTRUMDUZYQjxUcZi3Ct12JiqDDNKfT', 'scene_190926_17.jpg', 'Punto #17 • Acceso a Rooftop & Escalera Marina', 'Acceso Rooftop'),
    ('1lajbEjyvbltkBjcvapoGjWHiyEtwd4p-', 'scene_190926_18.jpg', 'Punto #18 • Rooftop Panorámico & Pérgola Solar', 'Rooftop & Mirador'),
    ('1QNp4tO7E-4_2UClSti0xiKeWXPm8jsd_', 'scene_190926_19.jpg', 'Punto #19 • Cuarto de Máquinas & Climatización VRF', 'Cuarto de Máquinas'),
    ('1D73vZ0nxXtlXhCLxw1TN2d8zXfQ5JV8K', 'scene_190926_20.jpg', 'Punto #20 • Fachada Principal & Cancelería Eurovent', 'Fachada Principal'),
    ('1DjdHLivqG3qJ1WNn_Ng0amQpepkcRROr', 'scene_190926_21.jpg', 'Punto #21 • Barda Perimetral & Portón de Acceso', 'Barda Perimetral'),
    ('1xwwxe9whhHoIMjg2KndiCrVEqpvHPVZu', 'scene_190926_22.jpg', 'Punto #22 • Jardín Posterior & Cisterna de Agua Tratada', 'Jardín Posterior'),
    ('1jn0ATUG8Tti8AH17a_y_vQgdJbyJhneB', 'scene_190926_23.jpg', 'Punto #23 • Vista Esférica 360° • Envolvente General de Obra', 'Vista General 360°')
]

out_dir = r"C:\Users\PC\.gemini\antigravity\scratch\unoarquitectos2\public\client-portal\arrecifes\360-equirect\2026-09-19"
os.makedirs(out_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print(f"Downloading {len(items)} 360 scenes to {out_dir}...")

for idx, (file_id, filename, title, room) in enumerate(items):
    target_path = os.path.join(out_dir, filename)
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"[{idx+1}/{len(items)}] Already exists: {filename} ({os.path.getsize(target_path)} bytes)")
        continue
    
    # Try high res Google thumbnail endpoint first (up to 2048px which is ideal for smooth WebGL performance)
    url = f"https://drive.google.com/thumbnail?id={file_id}&sz=w2048"
    print(f"[{idx+1}/{len(items)}] Fetching {filename} from {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            if len(data) > 5000:
                with open(target_path, "wb") as f:
                    f.write(data)
                print(f"  -> Saved {filename} ({len(data)} bytes)")
            else:
                print(f"  -> Small response ({len(data)} bytes), trying direct download...")
                url2 = f"https://drive.google.com/uc?id={file_id}&export=download"
                req2 = urllib.request.Request(url2, headers=headers)
                with urllib.request.urlopen(req2, timeout=20) as resp2:
                    data2 = resp2.read()
                    with open(target_path, "wb") as f2:
                        f2.write(data2)
                    print(f"  -> Saved {filename} via export ({len(data2)} bytes)")
    except Exception as e:
        print(f"  -> Error downloading {filename}: {e}")
    time.sleep(0.3)

print("Done downloading!")
