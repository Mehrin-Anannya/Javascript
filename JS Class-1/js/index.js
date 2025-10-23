//    The Browser Object Model (BOM) in JavaScript helps to interact with the browser, not just the webpage. 
//window.alert('Hello from external JS');
//alert('Hello from external JS without writing window object');
console.log('Hello from console JS');
document.writeln("Hello World" +'<br>');

let a;  //declaration
//data type initialization
let studentId = 123;
let studentCgpa = 3.75;
let studentName = 'AAsdds';
let eS = " "; //empty string
let b ='123';

//print
document.writeln('Student Id: ' + studentId +'<br>');
document.writeln('Student CGPA: ' + studentCgpa +'<br>');
document.writeln('Student Name: ' + studentName +'<br>');

//console print
console.log('Student Id: '+ studentId);
console.log('Student CGPA: ' + studentCgpa);
console.log('Student Name: ' + studentName);

document.writeln('<p style = "color:red"> Mehrin Anannya </p>');
document.writeln('<p style = "color:blue">' + studentName +'</p>');

//Type casting
//Float to Integer
let cgpa = parseInt(studentCgpa);
document.writeln('Float to Integer: ' +typeof(cgpa));
document.writeln(cgpa + '<br>');

//Float to String
let fS = cgpa.toString();
document.writeln('Float to String: '+typeof(fS));
document.writeln(fS + '<br>');

//Integer to Float
let id = parseFloat(studentId);
document.writeln('Integer to Float: '+typeof(id));
document.writeln(cgpa.toFixed(3)+ '<br>');

//String to Number(Integer)
let bS = parseInt(b);
document.writeln('String to Number(Integer): '+typeof(bS));
document.writeln(bS + '<br>');

//Try Integer to String, String to Number(Float)