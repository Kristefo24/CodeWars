function array(string) {
    const leng = string.split(',').length - 1;
    if(leng <= 1) return null;
    return string.split(',').slice(1, leng).join(' ')
}

console.log(array('1,2,3')) //"2 3"