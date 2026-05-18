import re
from pathlib import Path

root = Path('/Users/garrettbland/Documents/Websites/blockbuilder')
files = list(root.glob('src/components/**/*.jsx'))
action_map = {
    'SET_CUSTOM_MODAL': ('setCustomModal', True),
    'SET_MODAL_VISIBILITY': ('setModalVisibility', True),
    'SET_EDITING': ('setEditing', None),
    'UPDATE_EDITING': ('updateEditing', True),
    'UPDATE_BLOCK': ('updateBlock', True),
    'ADD_SECTION': ('addSection', None),
    'ADD_ROW': ('addRow', True),
    'APPEND_ROW': ('appendRow', True),
    'REMOVE_BLOCK': ('removeBlock', True),
    'SWAP_BLOCKS': ('swapBlocks', True),
    'ADD_CONTENT': ('addContent', True),
    'APPEND_CONTENT': ('appendContent', True),
    'DUPLICATE_BLOCK': ('duplicateBlock', True),
}

re_import_redux = re.compile(r"^import \{ ?(useDispatch(?:, useSelector)?|useSelector(?:, useDispatch)?) ?\} from 'react-redux'", re.MULTILINE)
re_import_constants = re.compile(r"^import \{[^}]*\} from '@/redux/constants'", re.MULTILINE)
re_use_selector = re.compile(r"const\s+(\w+)\s*=\s*useSelector\(\(state\)\s*=>\s*state\.(\w+)\)\s*\n")
re_use_dispatch = re.compile(r"^const\s+\w+\s*=\s*useDispatch\(\)\s*\n", re.MULTILINE)


def find_matching_brace(text, start):
    depth = 0
    for i in range(start, len(text)):
        c = text[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return i
    return -1


def replace_dispatch_calls(content):
    idx = 0
    changed = False
    while True:
        m = re.search(r"dispatch\s*\(\s*\{", content[idx:])
        if not m:
            break
        start = idx + m.start()
        obj_start = content.find('{', start)
        end = find_matching_brace(content, obj_start)
        if end == -1:
            break
        segment = content[start:end+1]
        type_match = re.search(r"type\s*:\s*(\w+)", segment)
        if not type_match:
            idx = end+1
            continue
        const = type_match.group(1)
        if const not in action_map:
            idx = end+1
            continue
        action_name, payload_required = action_map[const]
        payload_match = re.search(r"payload\s*:\s*", segment)
        if payload_match:
            payload_start = payload_match.end()
            p = payload_start
            depth = 0
            while p < end:
                ch = content[p]
                if ch in '{[(':
                    depth += 1
                elif ch in '}])':
                    depth -= 1
                elif ch == ',' and depth == 0:
                    break
                p += 1
            payload = content[payload_start:p].strip()
            new_call = f"useStore.getState().{action_name}({payload})"
        else:
            new_call = f"useStore.getState().{action_name}()"
        content = content[:start] + new_call + content[end+1:]
        changed = True
        idx = start + len(new_call)
    return content, changed


def process_file(path: Path):
    text = path.read_text()
    if "from 'react-redux'" not in text:
        return False
    changed = False
    if re_import_redux.search(text):
        text = re_import_redux.sub("import { useStore } from '@/store/useStore'", text)
        changed = True
    if re_import_constants.search(text):
        text = re_import_constants.sub('', text)
        changed = True
    new_text, selectors_changed = re_use_selector.subn(r"const \1 = useStore((state) => state.\2)\n", text)
    if selectors_changed:
        text = new_text
        changed = True
    new_text, dispatch_changed = re_use_dispatch.subn('', text)
    if dispatch_changed:
        text = new_text
        changed = True
    text, dispatch_calls_changed = replace_dispatch_calls(text)
    if dispatch_calls_changed:
        changed = True
    if "from '@/redux/constants'" in text:
        text = re.sub(r"^import .*from '@/redux/constants'\s*\n", '', text, flags=re.MULTILINE)
        changed = True
    if "from 'react-redux'" in text:
        text = re.sub(r"^import .*from 'react-redux'\s*\n", "import { useStore } from '@/store/useStore'\n", text, flags=re.MULTILINE)
        changed = True
    if changed:
        path.write_text(text)
    return changed

changed_files = []
for f in files:
    if process_file(f):
        changed_files.append(str(f.relative_to(root)))

print('Updated files:')
for f in changed_files:
    print(f)
