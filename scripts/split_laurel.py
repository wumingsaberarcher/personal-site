import re
from pathlib import Path

src = Path(r"C:\Users\wumin\Downloads\vecteezy_monogram-wreath-icon-logo-template_6619121.svg")
out = Path(r"D:\求职\personal-site\public\crest")
out.mkdir(parents=True, exist_ok=True)

text = src.read_text(encoding="utf-8")
paths = re.findall(r'd="([^"]+)"', text)
print("count", len(paths))
for i, d in enumerate(paths):
    print(i, "len", len(d), "start", d[:50])

d = max(paths, key=len)
idx = d.find("M 863.21875")
print("idx", idx)
(out / "laurel-full.d.txt").write_text(d, encoding="utf-8")
(out / "laurel-right.d.txt").write_text(d[:idx].strip(), encoding="utf-8")
(out / "laurel-left.d.txt").write_text(d[idx:].strip(), encoding="utf-8")
print("right", len(d[:idx]), "left", len(d[idx:]))
