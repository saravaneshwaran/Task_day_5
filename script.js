//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//anonymous function
let num=[1,2,3,4,5,6]
let oddNum=[]
let arr=function (i){
  for(let i=0;i<num.length;i++)
  if(i%2!==0){
  oddNum.push(i)
  }console.log(oddNum)
  }
arr(num)
//IIFE
let a=[1,2,3,4,5,6];

(function ()  {

  let odd= a.filter(num => num %2 !==0);
console.log( odd);

  })();

// arrow function
let num=[1,2,3,4,5,6]
let oddNum=[]
let arr= (i)=>{
  for(let i=0;i<num.length;i++)
  if(num[i]%2!==0){
  oddNum.push(num[i])
  }console.log(oddNum)}
arr(num)

// Convert all the strings to title caps in a string array
//anonymous function
let result=function(str){
    let arr=str.toLowerCase().split(" ")
    for(let i=0;i<arr.length;i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
      }
    console.log(arr.join(" ")) 
    }
  
  result("heLlo woRld")
// arrow function
let result= str =>{
    let arr=str.toLowerCase().split(" ")
    for(let i=0;i<arr.length;i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
      }
    console.log(arr.join(" ")) 
    }
  
  result("heLlo woRld")
//IIFE
  (function(str){
    let arr=str.toLowerCase().split(" ")
    for(let i=0;i<arr.length;i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
      }
    console.log(arr.join(" ")) 
    })("heLlo woRld");
// C.Sum of all numbers in an array
// arrow Function
let num=[1,2,3,4,5]
let total=num.reduce((a,b)=> a+b )
console.log(total)
//anonymous function
let num=[1,2,3,4,5]
let total=num.reduce(function(a,b){return a+b} )
console.log(total)
// IIFE
let num=[1,2,3,4,5]
let sum =function(){
  return function sum(arr){
    let arg=arr
    return arg.reduce((a,b)=>a+b)
    }
  }();
console.log(sum(num))
// d.Return all the prime numbers in an array
//anonymous function
let primes = function (arr){
  return arr.filter(num =>
  {
  if (num<=1) return false
  for(let i=2;i<num;i++){
    if (num%i===0)return false
    }
    return true
  })}
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(primes(numbers));

// arrow Function
let primes =(arr)=>{
  return arr.filter(num =>
  {
  if (num<=1) return false
  for(let i=2;i<num;i++){
    if (num%i===0)return false
    }
    return true
  })}
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(primes(numbers));

// IIEF
let primes =(function(){
  return (arr)=>{
  return arr.filter(num =>
  {
  if (num<=1) return false
  for(let i=2;i<num;i++){
    if (num%i===0)return false
    }
    return true
  })}
})();
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(primes(numbers));

// e.Return all the palindromes in an array

//anonymous function
let palindromes=function  (arr){
  let store=[]
  for(let i=0;i<arr.length;i++){
  let words = arr[i].toString();
  let rev_word=words.split("").reverse().join("")
  if(words===rev_word){
    store.push(arr[i])
    }}
  return store
  }
    
let words = ["level", "word", "rotor", "civic", "deified"];
letpalindromes(words);
console.log(palindromes(words));

// arrow Function
let palindromes= arr=>{
  let store=[]
  for(let i=0;i<arr.length;i++){
  let words = arr[i].toString();
  let rev_word=words.split("").reverse().join("")
  if(words===rev_word){
    store.push(arr[i])
    }}
    return store
}
    
let words = ["level", "word", "rotor", "civic", "deified"];
palindromes(words);
console.log(palindromes(words));
// or
let words = ["level", "word", "rotor", "civic", "deified"];
let pali= (arr)=>{
return arr.filter(w=> w=== w.split("").reverse().join(""))
}
console.log(pali(words))

// IIEF
let findPalindromes = (function()
{
      return arr=>{return arr.filter(w=> w=== w.split("").reverse().join(""))
}})();

let words = ["level", "word", "rotor", "civic", "deified"];
let palindromes = findPalindromes(words);
console.log(palindromes);
//f. Return median of two sorted arrays of the same size.
//anonymous function
let c=function(arr1,arr2){
  let combine=[...arr1,...arr2].sort((a,b)=>a-b)
  let middle=Math.floor(combine.length/2)
  if(combine%2===0){
    return (combine[middle-1]+combine[middle])/2
    }
  else{
    return combine[middle]}
  }
let a=[1,2,3,4]
let b=[4,5,6,7]
console.log(c(a,b))
// arrow Function
let c=(arr1,arr2)=>{
  let combine=[...arr1,...arr2].sort((a,b)=>a-b)
  let middle=Math.floor(combine.length/2)
  if(combine%2===0){
    return (combine[middle-1]+combine[middle])/2
    }
  else{
    return combine[middle]}
  }
let a=[1,2,3,4]
let b=[4,5,6,7]
console.log(c(a,b))

// IIEF
let c=(function(){
  return (arr1,arr2)=>{
  let combine=[...arr1,...arr2].sort((a,b)=>a-b)
  let middle=Math.floor(combine.length/2)
  if(combine%2===0){
    return (combine[middle-1]+combine[middle])/2
    }
  else{
    return combine[middle]}
  }
  })();
let a=[1,2,3,4]
let b=[4,5,6,7]
console.log(c(a,b))
//g. Remove duplicates from an array
//anonymous function
let remove_dup=function (arr) {
  return [...new Set(arr)];
}

let a=[1,2,1,3,4]
console.log(remove_dup (a))

// arrow Function
let remove_dup= (arr)=> {
  return [...new Set(arr)];
}
let a=[1,2,1,3,4]
console.log(remove_dup (a))
// IIEF
let remove_dup=(function(){return (arr)=> {
  return [...new Set(arr)];
}
})();
let a=[1,2,1,3,4]
console.log(remove_dup (a))

// h.Rotate an array by k times
//anonymous function
let rotatedArray = function(array, k) {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotatedArray(arr, k));
// arrow Function
let rotatedArray =(array, k)=> {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotatedArray(arr, k));
// IIEF
let rotatedArray =(function(){return function(array, k) {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
}
})();
let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotatedArray(arr, k));