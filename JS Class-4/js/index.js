let names = ["John", "David", "Shaun", "Tom"];
// document.writeln(names+"<br>");

// document.writeln(names[0] + "<br>");
// document.writeln(names[1] + "<br>");
// document.writeln(names[2] + "<br>");
// document.writeln(names[3] + "<br>");

// for(let i=0;i<=names.length;i++)
//     document.writeln(names[i]);

//  document.writeln("</br>");
// for(let i=0;i<=3;i++){
//     document.writeln("</br>");
//     document.writeln(names[i]);
// }

// document.writeln("</br>");
// for(let i=0;i<=3;i++){
//     document.writeln("</br>");
//     if(i%2==0){
//         document.writeln("<b style='color:red'>"+names[i]+"</b>");
//     }else{
//         document.writeln("<b style='color:green'>"+names[i]+"</b>");
//     }
// }

// //taking inputs with fixed array size 
// var myList = new Array(2);
// document.writeln("1st array :");
// for(var i = 0 ; i < myList.length; i++){
//    myList[i] = prompt("Enter " + i +  " index for 1st array");
//    document.writeln(myList[i]+ " ");
// }

// // //taking inputs using dynamic memory allocation concept 
// var list1 = new Array();
// document.writeln("<br/>" + "2nd array :");
// for(var i = 0 ; i < 2; i++){
//    list1[i] = prompt("Enter " + i +  " index for 2nd array");
//    document.writeln(list1[i]+ " ");
// }

// //Different functions of Array 
// //concat function
// var array1 = new Array();
// document.writeln("<br/>" + "New array: " + myList.concat(list1));
// array1=myList.concat(list1);
// document.writeln("<br/>" + "New array with variable:  " + array1);

//pop (removes from last)
document.writeln("Main Array:  "+names+"<br>");
names.pop();
document.writeln("<br>"+ "After pop(): " +names+"<br>");

//push adds element in the last
names.push("QWE");
document.writeln("<br>"+ "After push(): " +names+"<br>");

//shift is opposite of pop (removes from first)
names.shift();
document.writeln("<br>"+ "After shift(): " +names+"<br>");

//unshift : adds element in the first
names.unshift("You");
document.writeln("<br>"+ "After unshift(): " +names+"<br>");

//splice method : with it elements can be added/removed
//splice(add elements, remove elements) 
//first parameter: for starting index 
//second parameter is for deleting number of elements starting from first index
//number of elements you will add with value

//for adding elements with values
names.splice(2, 0, "zxc", "dxf");
document.writeln("<br>"+ "After splice(2, 0, 'zxc', 'dxf'): " +names+"<br>");

//for removing elements from any location in the array
names.splice(0, 1);
document.writeln("<br>"+ "After splice(0, 1): " +names+"<br>");

//slice: returns an array and never changes the main array.
// 2 is the starting index
//4-2 = 2 elements will be sliced not delete.
document.writeln("<br>"+ "After slice(2, 4): " +names.slice(2,4)+"<br>");
document.writeln("<br>"+ "Main Array:  "+names+"<br>");

//reverse 
document.writeln("<br>"+ "Reverse Array:  "+names.reverse()+"<br>");

// sorting can sort strings not numbers
var peopleNames = ['karin', 'rahim', 'masud'];
document.writeln("<br>"+ "ALphabet Array Sorting:  "+peopleNames.sort()+"<br>");
var numbers = [67, 98, 23];
// number sorting user defined function
 numbers.sort(function(a,b){
    return a-b;
});
document.writeln("<br>"+ "Number Array Sorting:  "+numbers.sort()+"<br>");

// finding the highest number
function highestScore(scores){
    var high = scores[0];
    for(var i = 0; i < 3; i++){
        if(high < scores[i])
            high = scores[i];
    }
    return high;
}

var scores = [34, 12, 78];
console.log (highestScore(scores));

//2d array declaration
 var studentInfo = [[1, "A"], [2, "B"], [3, "C"]];

document.writeln("2d array: </br>");
for(var i = 0; i < studentInfo.length; i++){
    for(var j = 0; j < studentInfo.length - 1; j++)
        document.writeln(studentInfo[i][j] + "      ");
    document.writeln("</br>");
}





