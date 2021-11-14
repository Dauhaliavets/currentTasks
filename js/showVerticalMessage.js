function showVerticalMessage(str) {
    let truncateStr = str.slice(0, 10);
    return verticalTransformStr(truncateStr);
}

function verticalTransformStr(str) {
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

console.log(showVerticalMessage('марафон'));