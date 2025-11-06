// // clear();
// // //Relational Operator always returns boolean i.e. either true of false
 var firstNumber = 50;
 var secondNumber = 100;
// var thirdNumber = 40;

// console.log(firstNumber > secondNumber);
// console.log(firstNumber >= secondNumber);
// console.log(firstNumber < secondNumber);
// console.log(firstNumber <= secondNumber);
// console.log(firstNumber == secondNumber);
// console.log(firstNumber === secondNumber);
// console.log(firstNumber === "100");
// console.log(firstNumber != secondNumber);
// console.log(firstNumber !== secondNumber);
// console.log(firstNumber !== "100");

// //Logical Operator

// console.log(firstNumber > secondNumber && firstNumber > thirdNumber); 
// console.log(firstNumber > secondNumber || firstNumber > thirdNumber); 
// console.log(!true);
// console.log(!firstNumber > secondNumber)

//conditional statements 
//if, else if, else
    let raining = true;
    // if(raining)
    //     document.writeln("stay");
    // else
    //      document.writeln("go outside");
    // if(firstNumber>secondNumber)
    // {
    //     document.writeln("firstNumber &gt secondNumber");
    // }else {
    //     document.writeln("firstNumber &lt secondNumber");
    // }
    // //else if
    // if(firstNumber>secondNumber)
    // {
    //     document.writeln("firstNumber &gt secondNumber");
    // }else if(firstNumber<secondNumber){
    //     document.writeln("firstNumber &lt secondNumber");
    // }else {
    //     document.writeln("firstNumber = secondNumber");
    // }

    // //problem
     let x= 150;

    // if(x==100){
    //     document.writeln(x + " is equal to 100");
    // } else if(x>100 && x<201){
    //     document.writeln(x + " is within 101-200");
    // }else if(x>200 && x<301){
    //      document.writeln(x + " is within 201-300");
    // }else {
    //      document.writeln("Invalid");
    // }

    //ternary operator
    // raining ? document.writeln("stay") : document.writeln("go outside") ;

    // x==100 ? document.writeln(x + " is equal to 100"): 
    // (x>100 && x<201)?  document.writeln(x + " is within 101-200"): 
    // document.writeln("Invalid");

    //switch case
    // switch (3){
    //     case 0: document.writeln("0");
    //     break;
    //     case 1: document.writeln("1");
    //     break;
    //     case 2: document.writeln("2");
    //     break;
    //     default: document.writeln("Invalid");
    // }

    // //Looping
    // for(var i=0; i<5; i++)
    //     document.writeln(i + "</br>");
//Task : 123 (red), 456(green) & 789(blue) & 10 (black)
    // var i = 1;
// while(i<=10){
//     document.writeln(i + "<br>");
//     i++;
// }

// do{
//     document.writeln(i + "<br>");
// }
// while(i <= 10)
// var i = 1;
// while(i<=10){
//     document.writeln(i + "<br>");
//     i++;
// }

// do{
//     document.writeln(i + "<br>");
//     i++;
// }
// while(i <= 12)
var i;
for(i = 0 ; i < 5; i++)
 {   if(i==2)
        break;
    document.writeln(i + "<br/>");
}

//continue
for(i = 0 ; i < 5; i++)
 {   if(i==2)
        continue;
    document.writeln(i + "<br/>");
}




