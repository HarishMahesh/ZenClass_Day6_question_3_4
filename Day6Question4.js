/* GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript */

// 1. Fix the code to get the largest of three.

aa = (f,s,t) => {
    //let f,s,t;          ----> this is removed from code
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
aa(1,2,3);

// 2.Fix the code to Sum of the digits present in the number

let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0;  // sum is initialised to 0
n = n + '';   // this is added to convert number to str
for(var i=0;i<n.length;i++){
 sum+= parseInt(n[i])  // str is converted to number 
 }
 return sum;
}

// 3. Fix the code to Sum of all numbers using IIFE function

const arr = [9,8,5,6,4,3,2,1];
(function(arr) {  // argument is added
 let sum = 0;
 for (var i = 0; i < arr.length; i++){  // semicolon is removed
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})(arr);  // aragument passed 

// 4. Fix the code to gen Title caps.

var arr1 = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr1); // argument is not passed so it is added.

// 5. Fix the code to return the Prime numbers

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){  // condition is changed to i < num from i < = num
 if(num%i===0)
 {
 return false;   // changed to false from true
 }
 }
 return true;  // changed to true here
});
console.log(myPrime);

// 6.Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum1 = num.reduce(sum)  // same sum variable is used so changed the varable name to sum1
console.log(sum1); // same sum variable is used so changed the varable name to sum1

// 7. Fix the code to rotate an array by k times and return rotated array using IIFE function

var arr2 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr2.length % k;
(function(k,arr) {  // arguments is added
 let out = [];  // out variable is declared 
 out = arr.slice(k, arr.length);  // in slice function from k + 1 it is chnaged to k
 var count = out.length;
 for (var i = 0; i < k; i++) {    // from k + 1 it is chnaged to k
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})(k,arr2); // arguments is added


 // 8.Fix the code to gen Title caps.

 var arr4 = ['guvi','geek','zen','fullstack'];
(function(arr) {                               // arguments is passed
 for (var i = 0; i < arr.length; i++) {  // i < arr.length is changed
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));  //arr[0][i] is changed to arr[i][0]
 }
})(arr4);  // arguments is passed

// 9.print all odd numbers in an array using IIFE function

var arr5 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {  //arguments is passed
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {  // condition is changed
 console.log(arr[i]);
 }}
})(arr5); //arguments is passed

// 10. Fix the code to reverse.

(function(str){
    let str1 = str.split('').reverse().join(''); // variable is declared and in split it is changed to split('').
    console.log(str1); 
   })('abcd')

// 11.Fix the code to remove duplicates.

var res = function(arr){
    let newArr = []  // newArr is declared outside for loop
    for(var i=0; i < arr.length; i++){
    //newArr = []; 
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
res(['guvi','geek','guvi','duplicate','geeK'])

/* 12. Fix the code to give the below output:
Expected Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
] */

var array =[[['firstname','vasanth'],['lastname','Raje'],['age',24],['role','JSWizard']],[['firstname','Sri'],['lastname','Devi'],['age',28],['role', 'Coder']]];
var final=[];
while(array.length!=0)
{
 var new_object = {}; // object is initialised and it is made empty for every iteration.
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}

console.log(final);


// 13. Fix the code to give the below output: Sum of odd numbers in an array

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
  
if (a %2 == 0)  // this if condition is added
a = 0; 
 if(c%2!=0)
 {
 return a+c;
 }
 return a});
console.log(s);

// 14. Fix the code to give the below output: Swap the odd and even digits

aa = data=>{
    var a=data;
    var l='';  // declaration is done outside for loop
   for(i=0;i<a.length; ++i){

    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
  }
   console.log(l);
   }
   aa('1234');