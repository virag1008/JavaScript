//////////////////////////////////////////////////////////

// find second highest number from array

// let input = [3,4,6,2,4,9]
// input.sort((a,b)=>a - b )
// console.log(input[input.length-2])

//////////////////////////////////////////////////////////

//  // find prime numbers...

// function PrimeNum(n){
//   let arr = [2,3,5,7]

//   for(let i = 2; i < n; i++){
//     if( i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
//       arr.push(i)
//     }
//   }
//   console.log(arr)

// }

// PrimeNum(20)

// // another method /////////////////////////////

// function primeNum (n){
//   let arr = []
//   for(let i = 2; i <= n; i++){
//     for(var j = 2; j < i; j++){
//        if( i % j == 0){
//          break
//        }

//     }
//        if(i==j){
//          arr.push(i)
//        }
//   }
//   return arr
// }

// console.log(primeNum (20))

////////////////////////////////////////////////////////////////

// // find occarance

// let input = 'abcaacdee'
// let obj = {}

// for(let i = 0; i < input.length; i++){
//   let count = 0
//   for(let j=0; j < input.length; j++){
//     if( input[i] == input[j]  ){
//        count++
//     }
//   }
//   obj[input[i]] = count
// }
//  console.log(obj)

// // another method ///////////////////

// for(let i = 0; i < input.length; i++){
//     if( obj[input[i]]  ){
//        obj[input[i]]++
//     }else{
//       obj[input[i]] = 1
//     }
// }
//  console.log(obj)

////////////////////////////////////////////////////////////////

// // make first letter capital

// let input = 'my name is rocky';
// // let op = "My Name Is Rocky"

// let arr = input.split(" ")

// let res = arr.map( item => {
//   return item.slice(0,1).toUpperCase() + item.slice(1)
// } )

// console.log(res.join(" "))

////////////////////////////////////////////////////////////////

// // sort array without using sort

// let input = ['b', 'c', 'd', 'a']
// let op = ["a", "b", "c", "d"]

// for(let i=0; i < input.length; i++){
//   for(let j = i+1 ; j < input.length; j++){
//     if( input[i] > input[j] ){
//        let swipe = input[i]
//        input[i] = input[j]
//        input[j] = swipe
//     }
//   }
// }
// console.log(input)

///////////////////////////////////////////////////////////////

// // find index of negative number from an array

// let input = [ 5,7,-6,-8,1,5,4,-7,-9 ]
// // let op = [2,3,7,8]

// let result = []
// for(let i=0; i < input.length; i++){
//   if(input[i] < 0){
//     result.push(i)
//   }
// }
// console.log(result)

///////////////////////////////////////////////////////////////

//  // calculate sum of ages of object..

// let input = [ {name:'john', age:21},
//               {name:'max', age:20},
//               {name:'alexa', age:20}
//             ]

// let sum = 0
// for(let i=0; i < input.length; i++){
//   sum += input[i].age
// }
// console.log(sum)

///////////////////////////////////////////////////////////////

// // create a function that replaces all occarances of string to another string.

// let input = ['apple','banana','orange','banana']
// let op = ['apple','kiwi','orange','kiwi']

// let result = []
// let res = input.map(item => {
//   if(item == 'banana'){
//     result.push('kiwi')
//   }else{
//     result.push(item)
//   }
// })
// console.log(result)

///////////////////////////////////////////////////////////////

// // create a function that finds longest word in a string

// const input = 'hello world it is a beautiful day'
// let op = 'beatiful'

// let arr = input.split(' ')
// console.log(arr)

// let res = arr.reduce((acc,curr) => {
//   if(acc.length < curr.length){
//      acc = curr
//   }
//   return acc
// })
// console.log(res)

////////////////////////////////////////////////////////////////

// // group by the people object according to age

// const people = [ {name:'john', age:21},
//                 {name:'max', age:20},
//                 {name:'alexa', age:20}
//                ]
// let op = { 20 : [ {name:'max', age:20}, {name:'alexa', age:20}  ],
//            21 : [ {name:'john', age:21} ]
//          }

// let obj = {}

// for(let i = 0; i < people.length; i++ ){
//   if(obj[people[i].age] ){
//     obj[people[i].age].push(people[i])
//   }else{
//     obj[people[i].age] = [people[i]]
//   }
// }

// console.log(obj)

///////////////////////////////////////////////////////////////

// // concat nested array without using any method

// let input = [1,2,[3,4,[5,6,7],8],9]
// let op = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let arr = []

///////////// another method /////////

// // console.log(input.flat(2))

///////////// another method /////////

// function separate (input){
//   for(let i=0; i< input.length; i++){
//     if( typeof input[i] == "object" ) {
//      separate (input[i])
//     } else {
//       arr.push(input[i])
//     }
//   }
// }
// separate (input)
// console.log(arr)

///////////// another method /////////

// for(let i=0; i < input.length; i++){
//   if(typeof input[i] == "object"){
//     for(let j=0; j < input[i].length; j++){
//       if(typeof input[i][j] == "object"){
//         for(let k=0; k < input[i][j].length; k++){
//             arr.push(input[i][j][k])
//         }
//       }else{
//         arr.push(input[i][j])
//       }
//     }
//   }else{
//     arr.push(input[i])
//   }
// }

// console.log(arr)

///////////// another method /////////

// let str = JSON.stringify(input)
// console.log(str)

// for(let i=0; i < str.length; i++){
//   if(str[i] !== '[' && str[i] !== ']' && str[i] !== ','){
//     arr.push(JSON.parse(str[i]))
//   }
// }
// console.log(arr)

///////////////////////////////////////////////////////////////

// // create a function that returns longest common prefix of array of string.

// let input = ['flower','flow','flight']
// let op = 'fl'

// first method ********************

// let firstLetter = ''

// const fun = (input)=> {
//   for(let i=0; i < input[0].length; i++){
//   let count = input[0][i]
//   for(let j=1; j < input.length; j++){
//     if(count !== input[j][i]){
//       return firstLetter
//     }
//   }
//   firstLetter += count
// }
//   return firstLetter
// }

//  console.log(fun(input));

// second method ********************

// let input = ['flower','flow','flight']
// // let op = 'fl'

// let res = input.reduce( (acc,curr) => {
//  let count = 0
//   while( acc[count] == curr[count] ){
//     count++
//   }
//   console.log(count)
//   return acc.slice(0,count)
// })

///////////////////////////////////////////////////////////////

//  // print the odd numbers

// let input = [1,2,3,4,5]
// // let op = [1,3,5]

// let res = input.filter(item=> item % 2 !== 0)
// console.log(res)

///////////////////////////////////////////////////////////////

// // remove all whitespaces from string

// let input = 'hello world'
// // let op = "helloworld"

// let arr  = input.split("").filter( item=> item !== " " )
// console.log(arr.join(""))

///////////////////////////////////////////////////////////////

// // find vowels from given string

// let input = 'jaiRadheKrishna'

//let arr=input.split('').filter( ele =>(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u' ))

// console.log(arr)
// console.log(arr.length)

///////////////////////////////////////////////////////////////

// // print each no after same second of that same no

// const input = [1,2,3,4,5]
// let measure = 0;
// let asd = ''

//   for(let i=1; i <= input.length; i++){
//     measure += i;
//     asd += '*'
//     function rep(asd){
//           setTimeout( ()=> console.log(asd) ,  measure*1000 )
//     }
//     rep(asd)
//   }

// other way ********************************

// function print(arr) {
//     let temp = 0;
//     for (let i = 0; i < arr.length; i++) {
//         (function (i) {
//             temp += (arr[i] * 1000);
//             (function (temp) {
//                 setTimeout(() => {
//                     console.log((arr[i]) + ":::::::::" + (temp));
//                 }, temp)
//             })(temp);
//         })(i);
//     }
// }
// print(input)

/////////////////////////////////////////////////////////////////////////////////
