//arrays
const myArr=[0,1,2,3,4,5]
const myheros=["shaktiman","naagraj"]

const myarr=new Array(1,2,3,4,6)
// console.log(myarr[4])

//Array Methods
// myarr.unshift(8);
// myarr.unshift(88);
// console.log(myarr)
// myarr.shift()
// console.log(myarr)

//slice,splice
console.log("A ",myarr) 

const myn1=myarr.slice(1,3)

console.log(myn1)

console.log("B",myarr)

const myn2=myarr.splice(1,3)
console.log("C",myarr)
console.log(myn2)
//slice just show the number from lower limit which is included in the interval and doesn't change the original array 
//while splice showes the number in the given interval and remove them from the original array

