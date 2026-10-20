import base64
from PIL import Image

# Load the emblem (globe + swoosh arrow filling ~96% of the square)
emblem = Image.open('public/favicon-emblem.png')

# 1. Multi-resolution favicon.ico
sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
emblem.save('public/favicon.ico', format='ICO', sizes=sizes)
print('Generated public/favicon.ico')

# 2. favicon.png (64x64 for standard tabs)
fav_64 = emblem.resize((64, 64), Image.Resampling.LANCZOS)
fav_64.save('public/favicon.png')
print('Generated public/favicon.png')

# 3. apple-touch-icon.png (180x180)
fav_180 = emblem.resize((180, 180), Image.Resampling.LANCZOS)
fav_180.save('public/apple-touch-icon.png')
print('Generated public/apple-touch-icon.png')

# 4. Also 32x32 favicon-32x32.png and 16x16 favicon-16x16.png
emblem.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon-32x32.png')
emblem.resize((16, 16), Image.Resampling.LANCZOS).save('public/favicon-16x16.png')

# 5. Embed emblem into public/assets/logo.svg as base64
with open('public/favicon-emblem.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="512" height="512">
  <image href="data:image/png;base64,{b64}" width="512" height="512" preserveAspectRatio="xMidYMid meet" />
</svg>
'''

with open('public/assets/logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print('Updated public/assets/logo.svg')
