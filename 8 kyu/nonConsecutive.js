function firstNonConsecutive (arr) {
    if(arr.length < 2) return null;
    let sorted = arr.sort((a, b) => a - b)

    for(let i = 0; i < sorted.length; i ++){
        if(sorted[i - 1] - sorted[i] === 1){
            continue;
        }else{
            return sorted[i]
        }
    }
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))