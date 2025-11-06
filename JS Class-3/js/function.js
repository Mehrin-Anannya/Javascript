//Function
//Problems without function
// var num = 16;
// document.writeln ("<br/>Result is:  " + num * num);
//document.writeln ("<br/>Result is:  " + num + num);
//document.writeln ("<br/>Result is:  " + num - num);
//document.writeln ("<br/>Result is:  " + num / num);

// var num = Number(prompt("Please enter a number: "));
// document.writeln ("<br/>Result is:  " + num * num);

// var num = 36;
// document.writeln ("<br/>Result is:  " + num * num);


//using function
//function without parameter
// function square(){
//     var num = 16;
//     document.writeln ("<br/>Result is:  " + num * num);
// }

// function square_1(){
//     var num = Number(prompt("Please enter a number: "));
//     document.writeln ("<br/>Result is:  " + num * num);
// }

// //function calling
// square();

// //function with parameter
// function square_2(num){
//     document.writeln ("<br/>Result is:  " + num * num);
//     document.writeln ("<br/>Result is:  " + num + num);
//     document.writeln ("<br/>Result is:  " + num - num);
//     document.writeln ("<br/>Result is:  " + num / num);
// }
//function with one argument
//square_2(16);//16 is argument
//square_2(20);//16 is argument

//function with multiple arguments
// function calculation(num1, num2, num3){
//     document.writeln ("<br/>Addition :  " + (num1 + num2 + num3));
//     document.writeln ("<br/>Subtraction :  " + (num1 - num2 - num3));
//     document.writeln ("<br/>Multiplication :  " + (num1 * num2 * num3));
//     document.writeln ("<br/>Division :  " + ((num1 / num2) / num3));
// }
// calculation(Number(prompt("First Number: ")), Number(prompt("Second Number: ")), 
// Number(prompt("Third Number: ")));


//Immediately Invokeable Function Expressions
(function calculation(num1, num2, num3){
    document.writeln ("<br/>Addition :  " + (num1 + num2 + num3));
    document.writeln ("<br/>Subtraction :  " + (num1 - num2 - num3));
    document.writeln ("<br/>Multiplication :  " + (num1 * num2 * num3));
    document.writeln ("<br/>Division :  " + ((num1 / num2) / num3));
}(Number(prompt("First Number: ")), Number(prompt("Second Number: ")), 
 Number(prompt("Third Number: "))));
 


