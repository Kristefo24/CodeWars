function missingWord(nums, str) {
    if(nums.length !== 3) return 'invalid'
    str = str.replace(/\s/g, '').split('')

    const message = nums.sort((a, b) => a - b).map(position => {
        return str[position]
    }).join('')
    
    return message.split('').length === 3 ? message.toLowerCase() : 'No mission today'
}

console.log(missingWord([2,0,2], " cE y"))