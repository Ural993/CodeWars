const arr = [23, 34, 5, 76, 233, 7]

for (let j = 0; j < arr.length-1; j++) {
    for (let i = 0; i < arr.length-1-j; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i],arr[i+1]]=[arr[i+1], arr[i]]
            // let temp = arr[i + 1]
            // arr[i + 1] = arr[i]
            // arr[i] = temp
        }
    }


}

//console.log(arr)


const names = ['Bob', 'Alex', 'Piter', 'slava']
const funcSort1 =(a,b)=>{
    if(a>b){
        return true
    }
    else  return false

}
const funcSort =(a,b)=>a-b
//console.log(arr.sort(funcSort).reverse)


const students = [
    {name:'Bob', age:23, isMarried:true, scores:95},
    {name:'Aleks', age:44, isMarried:true, scores:55},
    {name:'Stiv', age:56, isMarried:true, scores:76},
    {name:'Nik', age:21, isMarried:false, scores:65},
    {name:'Poll', age:18, isMarried:false, scores:77},
    {name:'Jon', age:35, isMarried:true, scores:35},
    {name:'Devid', age:25, isMarried:false, scores:64},
]

console.log(students.sort((a,b)=>a.name >= b.name? 1: -1))
//console.log(students.sort())