document.querySelectorAll(".myButton")[0].
addEventListener("click", function(){
    document.querySelector("h1").innerHTML 
    = this.innerHTML + " is clicked";
});
