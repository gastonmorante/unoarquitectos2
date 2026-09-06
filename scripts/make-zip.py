import os
import zipfile
import stat

dist_dir = 'dist'
for out_zip in ['dist-hostgator.zip', 'dist.zip']:
    if os.path.exists(out_zip):
        try:
            os.remove(out_zip)
        except:
            pass
    with zipfile.ZipFile(out_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(dist_dir):
            for d in dirs:
                dir_path = os.path.join(root, d)
                rel_path = os.path.relpath(dir_path, dist_dir).replace('\\', '/') + '/'
                zinfo = zipfile.ZipInfo(rel_path)
                zinfo.external_attr = (0o755 | stat.S_IFDIR) << 16
                zipf.writestr(zinfo, '')
            for f in files:
                file_path = os.path.join(root, f)
                rel_path = os.path.relpath(file_path, dist_dir).replace('\\', '/')
                zinfo = zipfile.ZipInfo(rel_path)
                zinfo.external_attr = (0o644 | stat.S_IFREG) << 16
                with open(file_path, 'rb') as fp:
                    zipf.writestr(zinfo, fp.read())

stat_info = os.stat('dist-hostgator.zip')
print(f"dist-hostgator.zip & dist.zip created successfully ({stat_info.st_size / (1024*1024):.2f} MB).")
