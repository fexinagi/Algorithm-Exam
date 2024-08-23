// Task 1

// var number = +prompt("Enter a number")
// var factorial = 1
// var counter = 0

// for (var i = 0; i <= number; i++) {
//     counter += 1
//     factorial = factorial * counter
// }

// console.log(factorial);



// Task 2

// let numbers = [34, 12, 59, 29, 47]

// function Sorting(a,b) {
//     return a - b;
// }

// numbers.sort(Sorting)

// console.log(numbers)



// Task 3

// var arr = [5, 10, 6, 8, 4, 2, 11]
// var counter = 0

// for (var i = 0; i < arr.length; i++) {

//     for (var j = 1; j < arr[i]; j++) {

//         if (arr[i] % j === 0) {
//             counter += 1
//         }
//     }

//     if (counter <= 2) {
//         console.log("Simple numbers:", arr[i])
//     }
//     counter = 0 
// }



// Task 4

// var word = prompt("Enter a word")
// var vowels = "aeiouAEIOU"
// var counter = 0

// for (var i = 0; i <= word.length; i++) {

//     if (vowels.includes(word[i])) {
//         counter += 1
//     }
// }

// console.log(counter)



// Task 5

// const n = 3
// var arr = []

// for (let i = 1; i <= n; i++) {

//     var number = prompt("Enter a number")
//     arr.push(number)
// }
// var big = 0;

// for (let j = 0; j <= arr.length - 1; j++) {

//     if (arr[j] > big) {
//         big = arr[j]
//     }   
// }
// console.log(big);



// Task 8

// function endingWith9 (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 10 === 9) {
//             return true;
//         }
//     }
//     return false;
// }

// let numbers = [12, 29, 34, 47, 59]; 
// let result = endingWith9(numbers);

// console.log(result); 



// Task 9 

// function evenNumbers(arr) {
//     let count = 0; 

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count; 

// }

// let numbers = [34, 12, 59, 29, 47, 88, 66]; 
// let evenCount = evenNumbers(numbers);

// console.log("Number of even elements: " + evenCount);



// Task 10

// let numbers = [0, 2, 3, 4, 5, 6, 7, 8, 9]; 

// for(let i = 0; i <= numbers.length; i++){
//     if(!numbers.includes(i)){
//         console.log("Missing number", i);
//     }
// }



// Task 11

// let input = prompt("Enter sommething");
// let result = input.charAt(0).toUpperCase() + input.slice(1);
// console.log(result);2



// Task 12 

// let numbers = [10, 20, 30, 40, 50]; 

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] += 5;
// }

// console.log(numbers);



// Task 13

// let n = 7; 

// for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += j + " ";
//     }
//     console.log(line); 
// }



// Task 15

// Sual: Data types neçə dənədir və hansılardır?
// Cavab: JavaScript-də 8 Datatype var:
//        1. String
//        2. Number
//        3. Symbol
//        4. Bigint
//        5. Null
//        6. Object
//        7. Undefined
//        8. Boolean



// Task 16

// Sual: Let və const arasındakı fərqlər nələrdir?
// Cavab: Let daxilində verilən dəyəri bir neçə dəfə dəyişmək olur lakin const daxilindəki dəyər hər zaman sabit olaraq qalır.



// Task 17

// Sual: Hansı method arrayı string’ə çevirir?
// Cavab: toString.



// Task 18

// Sual: forEach və map arasındakı fərq? 
// Cavab: Map var olan massivin dəyərinə əsaslanaraq yenisini yaradır, for each isə yenisini yaratmadan həmin massiv üzərində işləyir.