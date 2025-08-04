function missingWord(nums, str) {
    if(nums.length !== 3) return 'invalid'
    nums = nums.sort((a, b) => a - b)

    const message = str.replace(/\s/g, '').split('').map((item, index) => {
        for(const num of nums){
            if(index === num) return item
        }
    }).join('')

    return message.split('').length === 3 ? message.toLowerCase() : 'No mission today'
}

console.log(missingWord([0, 3, 5], "I love you"))