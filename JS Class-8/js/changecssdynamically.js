// let text = document.querySelector(".paraId");
// text.addEventListener("click", function(){
//     text.className = "textStyle";
// });

//Change individual para text and style on individual click
//  let textOne = document.querySelectorAll(".paraId");
// for(let i = 0; i < textOne.length; i++){
//     textOne[i].addEventListener("click", function(){
//        this.className = "textStyle";
//        this.innerHTML = this.innerHTML + (i+1) + " is clicked";
//     });
// } 

//Change color of all the paragraphs on clicking the first paragragh
// let paraDoc = document.querySelectorAll(".paraId");
// document.querySelector(".paraId").
//     addEventListener("click", function(){
//         for(let i = 0; i < paraDoc.length; i++)
//         paraDoc[i].className = "textStyle";
//         this.innerHTML = "new";
// });

//other addeventlisteners
let paraDoc1 = document.querySelectorAll(".paraId");
document.querySelector(".paraId").
    addEventListener("mouseover", function(){
        for(let i = 0; i < paraDoc1.length; i++)
        paraDoc1[i].className = "textStyle";
        this.innerHTML = "new";
});

let paraDoc2 = document.querySelectorAll(".paraId");
document.querySelector(".paraId").
    addEventListener("mouseout", function(){
        for(let i = 0; i < paraDoc2.length; i++)
        paraDoc2[i].className = " ";
        // this.innerHTML = "";
});

