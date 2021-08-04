/* GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops */

// 1.Write a code to print the numbers in the array
// Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
 
for (var i = 0; i < 11; i++) {  // i is initialised to 0 and increment is changed to i++
 new_string += numsArr[i] 
}
console.log(new_string);

// 2.Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = '';
 
for (var i = 0; i < 11; i++) {  // i is initialised to 0
 if (i === 10)
 new_string1 += numsArr1[i];   // if else part is added
 else
 new_string1 += numsArr1[i] + ',';  
}
console.log(new_string1);

// 3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1

var new_string2 = '';
var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 10; i >= 0; i-- ) { // condition part is changed
 if(i === 0)
 new_string2 += numsArr2[i];  // if else part is added
 else
 new_string2 += numsArr2[i] + ' ';
}
console.log(new_string2);


// 4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr3[i] %2 == 0 )
 {
 numsArr3[i] = 'even';  // odd is changed to even
 }
}
console.log(numsArr3);

// 5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )   // if condition is changed
 {
 numsArr4[i] = 'even' // changed to string here
 }
}
console.log(numsArr4);

// 6.Write a code to add all the numbers in the array
// Output: 66

var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;  // sum declaration is moved outside the for loop.
for (var i = 0; i <=10; i++) {
 
 sum += numsArr5[i]
}
console.log(sum);

// 7.Write a code to add the even numbers only
// Output: 30

var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <10; i++) {
 if(numsArr6[i]%2==0)   // ; is removed here
 sum1 += numsArr6[i]
}
console.log(sum1);

// 8.Write a code to add the even numbers and subract the odd numbers
// Output: 94

var numsArr7 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i <=10; i++) {
 if(numsArr7[i]%2 ==0)  // condition is changed and ; is removed
 {
 sum2 += numsArr7[i]
 }
 else
 {
 sum2 -= numsArr7[i]
 }
}
console.log(sum2);

// 9.Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr8 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr8.length; i++) {  // ; removed here
 console.log( numsArr8[i])
}

// 10.Write a code to print elements in the inner arrays
// Output: 1234567891011

var numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';   // changed the initialization to ''
for (var i = 0; i < numsArr9.length; i++) {
 var inner_array = numsArr9[i];
 for(var j = 0 ; j < inner_array.length;j++ ) // increment is changed to j++
     str_all +=inner_array[j]
}
console.log(str_all);

// 11.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArrs = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all1 =0;
for (var i = 0; i < numsArrs.length; i++) {
 var inner_array = numsArrs[i];
 for(var j = 0 ; j < inner_array.length;j++ )  // increment is changed to j++
    {
      if(str_all1 %2 == 0 )  // if condition is changed
      {
         numsArrs[i][j] = 'even'  // this line is changed
        }
        ++str_all1;  // this is added
    }   // curly brackets is added to inner for loop
 
}
console.log(numsArrs);

// 12.Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsAr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all2='';
for (var i = numsAr.length-1; i >= 0; i--) { // initialization,condition and increment part is changed
 var inner_array = numsAr[i];

 for(var j = inner_array.length - 1; j >= 0 ;j-- ) // initialization,condition and increment part is changed
 {
   
    if(!str_all2)   // if else part is added
    str_all2 +=  inner_array[j];
    else
    str_all2 = str_all2 + ' ' + inner_array[j];
 }
}
console.log(str_all2);

// 13.Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i][j]%2!=0)  // changed in condition
 {
 sum_odd += numsArr[i][j]  // changed here
 }
 else
 {
 sum_even += numsArr[i][j] // changed here
 }
}
}
console.log(sum_odd);
console.log(sum_even);