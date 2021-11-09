function showVerticalMessage(str){
    if(str.length > 10){
        str = str.slice(0, 10);
        console.log(vecticalTransformStr(str));
    } else {
        console.log(vecticalTransformStr(str));
    }
}

function vecticalTransformStr(str) {
    let outputStr = ''
    if(str.startsWith('м')){
        outputStr = str.slice(0, 1).toUpperCase() + '\n';
        for(let char of str.slice(1)){
            outputStr += `${char}\n`;
        }
    } else {
        for(let char of str){
            outputStr += `${char}\n`;
        }
    }
    return outputStr;
}

showVerticalMessage('марафон')