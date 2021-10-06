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

function hello(name) {
  debugger
  let arr = name.split('')
  if(name = undefined) return 'Hello, World!', "returns 'Hello, World!' when name is not given"
  else if (name =='') return 'Hello, World!', "returns 'Hello, World!' when name is an empty String"
  //else if(name[0].toUpperCase() == name[0]) return `Hello, ${name}!`, `returns 'Hello, ${name}!' when given '${name}'`
  else if(arr[0].toUpperCase() !== arr[0]) {
    arr.splice(0,0,arr[0].toUpperCase())
    arr.splice(1,1)
    let arr2 = arr.join('')
   return String(`Hello, ${arr2}!`)
  } 
}
console.log(hello('johN'))