const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  
};

function decode(expr) {
    let sized = 10;
    let chunks = [];

    for (let i = 0; i < expr.length; i += sized) {
        chunks.push(expr.slice(i, i + sized));
    }

    return chunks.map(items => {
        if (items === '**********') return ' ';

        let morse = items.replace(/^0+|10|11/g, match => {
            if (match === '10') return '.';
            if (match === '11') return '-';
            return '';
        });

        return MORSE_TABLE[morse];
    }).join('');
}

module.exports = {
    decode
}