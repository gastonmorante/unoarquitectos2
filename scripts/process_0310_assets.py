import os
import sys
from PIL import Image

src_dir = r"E:\NegocioUp Business\UNO arquitectos\Avance de obra\031026\Fotos 360"
out_dir = r"C:\Users\PC\.gemini\antigravity\scratch\unoarquitectos2\public\client-portal\arrecifes\360-equirect\2026-10-03"

os.makedirs(out_dir, exist_ok=True)

files = sorted([f for f in os.listdir(src_dir) if f.lower().endswith(".jpg")])

print(f"Found {len(files)} source 360° images in: {src_dir}")

for i, filename in enumerate(files, 1):
    src_path = os.path.join(src_dir, filename)
    target_jpg_name = f"scene_031026_{i:02d}.jpg"
    target_webp_name = f"scene_031026_{i:02d}.webp"
    
    target_jpg_path = os.path.join(out_dir, target_jpg_name)
    target_webp_path = os.path.join(out_dir, target_webp_name)
    
    print(f"[{i:02d}/{len(files):02d}] Processing {filename} -> {target_jpg_name} & {target_webp_name}...")
    
    with Image.open(src_path) as img:
        # Resize to 2048x1024 for high quality & fast loading WebGL texture
        resized = img.resize((2048, 1024), Image.Resampling.LANCZOS)
        
        # Save high quality JPEG
        resized.save(target_jpg_path, "JPEG", quality=88, optimize=True)
        
        # Save superfast WebP
        resized.save(target_webp_path, "WEBP", quality=85)
        
    jpg_size_kb = os.path.getsize(target_jpg_path) / 1024
    webp_size_kb = os.path.getsize(target_webp_path) / 1024
    print(f"    Done: JPG ({jpg_size_kb:.1f} KB), WebP ({webp_size_kb:.1f} KB)")

print("\nAll 20 360° scenes processed successfully into 2026-10-03!")
