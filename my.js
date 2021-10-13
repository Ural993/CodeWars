// function arrayDiff(a, b) {
//  // debugger
//   let arr =[]
//   for (let i=0; i<b.length; i++){
//     for(let j=0; j<a.length; j++){
//         if(a[j] != b[i])  arr.push(a[j])
//        }  
//   }
//  return arr
// }
// function arrayDiff(a, b) {
//   let arr =[]
//   for (let i=0; i<b.length; i++){
//      arr = a.filter(function(number){
//       return number != b[i]
//     }) 
//     a = arr
//   }
//   return arr
// }
// console.log(arrayDiff([1,2,2,2,23,3,3], [3,2,1]))
// function decodePass( passArr, bin ){
//   debugger
//   digit = String.fromCharCode(parseInt(bin, 2) );
//   pas = passArr.filter(function(number){
//     return number === digit
//   }) 
//   if(pas) return pas[0]
//   else return false  
// }
// console.log(decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'))

// function missingNo(nums) {
// debugger
//  nums.sort(function(a, b) { return a - b; });
// for (var i =0; i <=nums.length+1; i++) {
// if(i !== nums[i]) {
//   return (i)
// }
// }
// }
//  console.log(missingNo([0,3,5,8,4,2,7,10,9,1]))

// function defineSuit(card) {
//   debugger
//  // arr = card.split('')
//  // arr.splice(0,1)
//   arr2 = card.replace(/('♣'|'♦'|'♥'|'♠')/g, '$1');
//   //console.log(arr2)
//  if(arr2 == "♣") return 'clubs'
// else if(arr2 =="♦") return 'diamonds'
// else if(arr2 == "♥") return 'hearts'
// else if(arr2 == "♠") return 'spades'
// }
// console.log(defineSuit('3♦'))
// function  calculateAge(a,b) {
//   debugger
//     if(a<b && (b-a)>1) return `You are ${b-a} years old.`
//     else if(a<b && (b-a)==1) return `You are ${b-a} year old.`
//     else if (a==b) return "You were born this very year!"
//     else if(a>b && (a-b)==1) return  `You will be born in ${a-b} year.`
//     else if(a>b) return  `You will be born in ${a-b} years.`
// }

// console.log(calculateAge(2013, 2012))

// function distinct(a) {
//   for (let i=0; i<a.length; i++){
//     if (a[i]==a[i+1]) {
//       a.splice(i,1)
//     }
//   }
//   return a
// }

// console.log(distinct([ 1, 1, 2, 3, 4, 5 ]))
// function checkExam(array1, array2) {
//   debugger
//  let result =null;
//   for (let i =0; i<array1.length; i++){
//     // if(array2[i] ==''){
//     //   result=result+1
//     // }
//       if (array1[i] == array2[i]) {
//         debugger
//         result=result+4}
//       else if  (array1[i] !== array2[i] && array2[i] !==''){
//         debugger
//         result=result-1 
//       }    
//   }
//   if(result ==0) return 0
//   else return result  
// }
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))

// function hello(name) {
//   debugger
//   let arr = name.split('')
//   if(name = undefined) return 'Hello, World!', "returns 'Hello, World!' when name is not given"
//   else if (name =='') return 'Hello, World!', "returns 'Hello, World!' when name is an empty String"
//   //else if(name[0].toUpperCase() == name[0]) return `Hello, ${name}!`, `returns 'Hello, ${name}!' when given '${name}'`
//   else if(arr[0].toUpperCase() !== arr[0]) {
//     arr.splice(0,0,arr[0].toUpperCase())
//     arr.splice(1,1)
//     let arr2 = arr.join('')
//    return String(`Hello, ${arr2}!`)
//   } 
// }
// console.log(hello('johN'))

// function twoHighest(arr) {
//   debugger
//   let resultArr =[];
//   function findBiggestNumber(){
//     debugger
//     let idbiggestNumber = 0;
//     for(i=0; i<arr.length; i++){
//       if(arr[i]>arr[idbiggestNumber]) idbiggestNumber = i 
//     }
  
//     return idbiggestNumber
//   }
//    let id = findBiggestNumber(arr)
//    let newArr = arr.splice(id, 1)
//    resultArr=resultArr.concat(newArr);
//     id = findBiggestNumber(arr)
//     newArr = arr.splice(id, 1)
//    if(resultArr[0] == newArr[0]){
//      id = findBiggestNumber(arr)
//      newArr = arr.splice(id, 1)
//     resultArr= resultArr.concat(newArr)
//     return resultArr
//    }else{
//     resultArr=resultArr.concat(newArr)
//     return resultArr
//    }
// }
// function billboard(name, price = 30){
//  let count =0;
// for (let i=0; i<name.length; i++){
//   count+=price
// }
//   return count
// } 

// console.log(billboard('Ural Islamov'))
// function solution(a, b){
//   if(a.length >b.length){
//     return b+a+b
//   }else{
//     return a+b+a
//   }
// }
// console.log(solution('45', '1'));
// function lovefunc(flower1, flower2){
//  return flower1==flower2 ?  false:true
// }
// console.log(lovefunc(620,602))
// function findMultiples(integer, limit) {
//   let arr =[]
//   for (let i=1;i<=(limit/integer);i++){
//     arr.push(integer*i)
//   }
//   return arr
// }
// console.log(findMultiples(4, 27))
// function generateRange(min, max, step){
//   let arr =[]
//   let num = min
// do {
//   arr.push(num)
//   num+=step
//  }while (num <=max)
//  return arr
// }
// console.log(generateRange(1,10,3))
// function narcissistic(value) {
//   debugger
//   let sum = 0;
//   let b = value.toString();
//   for(let i=0; i<b.length; i++){
//     sum+=Math.pow(b[i], b.length)
//   }
//   if(sum == value) return true
//   else return false
// }
// console.log(narcissistic(371))
// function lastSurvivors(str) {
//   let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   let str1 = str.split('')
//   let i =0
//   for (i=0;i< str1.length;i){
//    //debugger
//       let simb = str1.splice(i,1);
//       if(str1.includes(simb[0])){
//           let id = arr_en.indexOf(simb[0])
//           let id2 =str1.indexOf(simb[0])
//           if(simb[0] =='z'){
//              str1.splice(id2,1,arr_en[0])
//                    }
//           else str1.splice(id2,1,arr_en[id+1])
//             }
//       else{
//           if(str1.includes(str[i-1])){
//             i--}
//           else {
//              str1.splice(i,0,simb[0])
//              i++} 
//            }
//       }
//       return str1.join('')
// }

// function lastSurvivors2(str) {
//   //debugger
//   let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   let str1 = str.split('')
//   let i =0
//   for (i=0;i< arr_en.length;i++){
//       let arr = str1.filter(m=> {
//          return m ==arr_en[i]
//       })
//       if(arr.length%2 ==0){
//        for(let i=0; i<arr.length; i++){
//         let id  = str1.indexOf(arr[i])
//         str1.splice(id,1)
//        }
//         for(let i=0; i<arr.length/2; i++){
//            let id  = arr_en.indexOf(arr[i])
//           // if(id ==25) str1.push(arr_en[0])
//              str1.push(arr_en[id+1])
//        }
//       }else{
//          for(let i=0; i<(arr.length-1); i++){
//         let id  = str1.indexOf(arr[i])
//         str1.splice(id,1)
//        }
//         for(let i=0; i<(arr.length-1)/2; i++){
//            let id  = arr_en.indexOf(arr[i])
//           // if(id ==25) str1.push(arr_en[0])
//              str1.push(arr_en[id+1])
//        }
//       }
//       }
//       return str1.join('')
// }
//console.log(lastSurvivors2('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'))
//console.log(lastSurvivors2('abaa'))
// function remove(s){
//  debugger
//   let arr =[]
//   let ns = s.split('')
//   for(let i=0; i<s.length; i++){
//     if(ns[ns.length-1] == '!'){
//       ns.splice(ns.length-1, 1)
//       arr = ns
//     }
//     else return ns.join('')
//   }
//   return ns.join('')
  
// }
// console.log(remove("zpc!!!!!"))

// function noSpace(x){
//   let r = x.replace(/\s/g, '')
//  return r
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


// function well(x){
//   debugger
//  let arr = x.filter(m=>m=='good')
//  if(arr.length <=2) return 'Publish!'
//   else return 'I smell a series!'
// }
// well(['good', 'bad', 'bad', 'bad', 'bad'])

var isSquare = function(arr){
  debugger
  let number =0;
  if(arr.length == 0) return undefined
  for(let i=0; i< arr.length; i++){
    if(Number.isInteger(Math.sqrt(arr[i]))) number++
  }
if(number == arr.length) return true
  else return false
}
console.log(isSquare([1,4,9,16,24]))