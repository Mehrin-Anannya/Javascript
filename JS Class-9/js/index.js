// const names = ["Karim", "Rahim", "John"];
// //for of
// document.writeln("For of use: ");
// for(let name of names){
//     document.writeln(name + "\t");
// }

// document.writelnln("<br/> For in loop use: <br/>");
// //for in loop
// let person = {
//     id : 1,
//     name : 'Mehrin Anannya',
//     profession: 'Teaching'
// }

// for(let x in person){
//     document.writelnln(x + " : " + person[x] + "<br/>");
// }


//Solve the following
// let students = [
//     {
//     id : 1,
//     name : 'Mehrin ',
//     profession: 'Teaching'
// }, {
//     id : 2,
//     name : ' Anannya',
//     profession: 'Student'
// }];

// for(let t of students){
//     for(let x in t)
//     document.writeln(x + " : " + t[x] + ",\t");
//     document.writeln("<br>");
// }

// document.writeln("id: " + students[0].id +", " + students[1].id);

// for(i = 0 ; i < students.length; i++)
// document.writeln( "for " + i + " : " + students[i].id +", " 
// + students[i].name + "<br>");

//  for(i of students)
//  document.writeln(i.id +", " + i.name + "<br>");
// document.writeln('name' in students[0]);
//  for(let i of students){
//  for(let y in i){
//  if(y == 'name')
//  document.writeln(i[y] + ", ");
//  }
//  }

// // //For Each loop
// document.writeln("<br/> For Each loop use: <br/>");
// var numbers = [1, 21, 31 , 41];

// numbers.forEach(function(x){
//     document.writeln(x + "<br/>");
// });



//map
// document.writeln("<br/> Map use: <br/>");
// //Map itself returns value in an array 
// //i.e. squareNumbers is the array.
// var squareNumbers = numbers.map(function(x){
//     return x*x;
// })
// document.writeln(squareNumbers + "<br/>");

//filter 
// document.writeln("<br/> Filter use: <br/>");
// var numbers_filter = [1, 21, 31 , 41, 67, 90];
// var filteredNumbers = numbers_filter.filter(function(x){
//     return x>20;
// })
// document.writeln(filteredNumbers + "<br/>");


// // General function
// function abc(){
//     return "Hello from general function.";
// }
// document.writeln(abc());
// // Arrow function
 //without return keyword 
 //but if use return then use {return ....}
//  const display = () => {
//     return "<br/>Hello with return arrow function.";
//  }
//    document.writeln(display());

//  var display2 = () => "Hello without return keyword";
//  document.writeln("<br/>" + display2() + "<br/>");

//  // Solve a arrow function with parameterized function
//  add = (a, b) => document.writeln("Add: " + (a+b), "  Sub: " + (a-b));
//  add(1,2); 
// // //arrow, map, filter
students= [
    {
        id : 1,
        name : "Karim",
        cgpa : 3.67
    },
    {
        id : 2,
        name : "Rahim",
        cgpa : 4.00
    },
    {
        id : 3,
        name : "Shamim",
        cgpa : 3.70
    }
];

function showStudentNames(){
    return students.filter(function(x){ 
       return x.cgpa > 3.67
    }).map(function(y){
        return y.name;
    });
}
document.writeln("check:" +students[1].name);
document.writeln("<br/>" + showStudentNames() + "<br/>");

const showStudentNamesWithArrow = () => students.filter((x) =>
 x.cgpa > 3.67).map((y) =>  y.name);

 document.writeln("<br/>" + showStudentNamesWithArrow() + "<br/>");