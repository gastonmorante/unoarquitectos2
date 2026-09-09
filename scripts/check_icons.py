import os
import re

lucide_icons = [
    'Sparkles', 'Compass', 'Camera', 'FileText', 'FolderOpen', 'ExternalLink',
    'CheckCircle2', 'ChevronRight', 'ChevronLeft', 'Clock', 'Microscope', 'HardHat',
    'Award', 'ShieldCheck', 'Calendar', 'Building2', 'MapPin', 'MessageSquare',
    'Layers', 'Play', 'Pause', 'ZoomIn', 'ZoomOut', 'Maximize2', 'Minimize2',
    'X', 'Send', 'Bot', 'User', 'HelpCircle', 'Phone', 'Lock', 'BookOpen',
    'RefreshCw', 'RotateCcw', 'AlertTriangle', 'Home', 'Eye', 'EyeOff',
    'ArrowRight', 'ArrowLeft', 'ChevronDown', 'Tag', 'RotateCw'
]

found_issues = []

for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                code = fh.read()
            
            # Find all lucide icons used in JSX tags <Icon ...
            used_icons = set(re.findall(r'<([A-Z][a-zA-Z0-9]+)\b', code))
            
            # Find all imported symbols
            imported_symbols = set()
            for imp in re.findall(r'import\s+\{([^}]+)\}\s+from', code):
                for sym in imp.split(','):
                    s = sym.strip().split(' as ')[-1].strip()
                    if s:
                        imported_symbols.add(s)
            
            for icon in used_icons:
                if icon in lucide_icons:
                    if icon not in imported_symbols:
                        found_issues.append(f"{path}: Uses <{icon}> but '{icon}' is not in import statements!")

if found_issues:
    print("ERRORS FOUND:")
    for issue in found_issues:
        print(" -", issue)
else:
    print("ALL ICON IMPORTS ARE 100% VALID!")
