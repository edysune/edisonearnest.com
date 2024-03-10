const font = {
    ' ': space,
    'a': a,
    'd': d,
    'e': e,
    'r': r,
    'i': i,
    's': s,
    't': t,
    'o': o,
    'n': n,
}

const space = [
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
]

const a = [
    '█████   ',
    '██   ██ ',
    '███████ ',
    '██   ██ ',
    '██   ██ ',
]

const e = [
    '███████ ',
    '██      ',
    '█████   ',
    '██      ',
    '███████ ',
];

const d = [
    '██████  ',
    '██   ██ ',
    '██   ██ ',
    '██   ██ ',
    '██████  ',
];

const i = [
    '██ ',
    '██ ',
    '██ ',
    '██ ',
    '██ ',
];

const o = [
    ' ██████  ',
    '██    ██ ',
    '██    ██ ',
    '██    ██ ',
    ' ██████  ',
];

const s = [
    '███████ ',
    '██      ',
    '███████ ',
    '     ██ ',
    '███████ ',
];

const n = [
    '███    ██ ',
    '████   ██ ',
    '██ ██  ██ ',
    '██  ██ ██ ',
    '██   ████ ',
];

const r = [
    '██████  ',
    '██   ██ ',
    '██████  ',
    '██   ██ ',
    '██   ██ ',
];
const t = [
    ' ████████ ',
    '    ██    ',
    '    ██    ',
    '    ██    ',
    '    ██    ',
];

export function getFont() {
    return font;
};