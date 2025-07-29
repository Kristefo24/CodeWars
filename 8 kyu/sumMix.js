
function sumMix(x){
  let total = 0
  for(let y of x){
    y = Number(y)
    total += y
  }
  return total
}
console.log(sumMix(['2', 5, 9, '10']))

function multiples(m, n){
    const arr = [n]
    let num = n
    if(n <= 0) return 'Invalid'
    for(let i = 1; i < m; i++){
        num += n
        arr.push(num)
    }
    return arr
}

console.log(multiples(4, 5))