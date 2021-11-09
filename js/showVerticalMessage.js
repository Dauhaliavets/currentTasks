function showVerticalMessage(str) {
    str = str.slice(0, 10);
    str ? console.log(vecticalTransformStr(str)) : console.log('Была переданна пустая строка');
}

function vecticalTransformStr(str) {
    return str.startsWith('м')
        ? str.slice(0, 1).toUpperCase() + '\n' + iterationOnString(str.slice(1))
        : iterationOnString(str);
}

function iterationOnString(str) {
    let outputStr = '';
    for (let char of str) {
        outputStr += `${char}\n`;
    }
    return outputStr.trim();
}

showVerticalMessage('марафон')