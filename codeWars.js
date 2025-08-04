// const validCard = card => {
//   //your code here
//   card = card.replace(/\s/g, "")
//   let doubleCard = 0
//   let addedDoubles = 0
//   for(let i = card.length-2; i >= 0; i-=2){
//     doubleCard = card[i]*2

//     if(doubleCard > 9){
//       let digits = doubleCard.toString().split('').map(Number);
//       let sum = digits.reduce((acc, curr) => acc + curr, 0);
//       addedDoubles += sum
//     }else{
//       addedDoubles += doubleCard
//     }
    
//   }
//   let newNum = 0
//   for(let j = card.length-1; j >= 0; j -= 2){
//     newNum = Number(card[j])
//     addedDoubles += newNum
//   }
//   return addedDoubles % 10 === 0
//   }
// console.log(validCard('2222 2222 2222 2224'))
// console.log(validCard("5457 1111 9323 4311"))
// console.log(validCard('5457 6238 9823 4311'))
// console.log(validCard('1252 6238 9323 4311'))

/*NEXT*/
// the output of the 1st function is the input of the 2nd

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// function chain(input, fs){
//   let result = fs[0](fs[1](input))
//   console.log(result)
// }

// chain(2, [mult, add]);

/*NEXT*/
//IF A LETTER EXIST '1' IF NOT '0'


// const itIncludes = (char) => {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
//     return [...alphabet].map(word => char.includes(word) || char.includes(word)?'1':'0').join('')
// }

// console.log(itIncludes('action'))

/*NEXT*/
//DECODE MESSAGE

// function decode(message){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   const reversedAlpha = alphabet.split('').reverse().join('')
  
//   return message.split('').map(
//     word => {
//       let whenReverse = reversedAlpha.includes(word).indexOf(word)
//     }
//   ).join('')
// }

// console.log(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv"))

/*NEXT*/
//VOWELS COUNT

// function getCount(str) {
//   let count = 0
//   const vowels = 'aeiou'
//   str = str.toLowerCase()
//   let check = str.split('').map(word =>
//     vowels.includes(word)?count+=1:count=count
//   )
//   return count;
// }

// console.log(getCount('Education is the key'))

/*NEXT*/
//Julia's age

// function age(x, y){
//   //your code here
//   let bro = x/(y-1)
//   let jul = bro + x
//   console.log(jul)
// }
// age(-15,0.25)

/*NEXT*/
//DECORDING A MESSAGE

// let message = "r slkv mlylwb wvxlwvh gsrh nvhhztv"
// let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// alphabet = alphabet.split('')

// let decordedMessage = message.split('').map(function(item){
//     let itemIndex = alphabet.indexOf(item)
//     if(itemIndex >= 0)
//         return item === ' ' ? ' ' : alphabet.reverse()[itemIndex]
// }).join('')

// console.log(decordedMessage)

/*NEXT*/

// function solve(s, k){
//     let result = ''
//     // const alphas = "abcdefghijklmnopqrstuvwxyz"
//     if(k >= s.length)
//         return ''
//     let i = 1
//     let lowest = s.split('').reduce((acc, item) =>{
//         if(item < acc){
//             acc = item
//         }
//         return acc
//         },s[0])
//     for(let j = 0; j < s.length; j++){
//         if(s[j] === lowest && i <= k){
//             i++
//             continue
//         }
//         result += s[j]
//     }
//     return result
// }
// console.log(solve('abracadabra', 6))//'abracadabra';

// function correct(text) {
//   let corrected = '';
//   for (let i = 0; i < text.length; i++) {
//     const char = text[i];
//     if (char === '5') {
//       corrected += 'S';
//     } else if (char === '0') {
//       corrected += 'O';
//     } else if (char === '1') {
//       corrected += 'I';
//     } else {
//       corrected += char;
//     }
//   }
//   return corrected;
// }

// console.log(correct("PAR15"))

/*NEXT*/
// function sumMul(n,m){
//     if(n > m || n === 0) return 'INVALID'
//     let sum = 0
//     for(let i = n; i < m; i ++){
//         if(i % n === 0) sum += i
//     }
//     return sum
// }
// console.log(sumMul(0, 0))

/*NEXT*/
// function solve(compasses, gears, tablets) {
//     let min = compasses
//     if(compasses === 0 || gears === 0|| tablets === 0) return 0
//     if(min > gears) min = gears
//     if(min > tablets) min = tablets
//     return (compasses*compasses)+(gears*gears)+(tablets*tablets)+(min*7)
// }
// console.log(solve(4, 2, 2))

/*NEXT*/
// function remove (string) {
//     if(!string) return ''
//     return string.split(' ').map(item=>item.replace(/!+$/, '')).join(' ')
// }

// console.log(remove("!Hi!! !!!Hi"))

/*NEXT*/
// function minimumPercentage(foods) {
//     let total = 0
//     if(foods.length === 1) return foods[0]
//     for(const food of foods){
//         total += food
//     }
//     const minimumPercent = total - (foods.length - 1) * 100
//     return minimumPercent > 0? minimumPercent : 0
// }

// console.log(minimumPercentage([65, 80, 80, 90]))
// console.log(minimumPercentage([57,82,100,71,85]))
// console.log(minimumPercentage([57,82,100,71,85]))
// console.log(minimumPercentage([76]))

