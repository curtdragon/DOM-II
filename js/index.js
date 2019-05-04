// Your code goes here

//mouseover
let magicbus = document.getElementById("funbus");

magicbus.addEventListener("mouseover", event => {
    event.target.style.visibility="hidden";
    setTimeout(function () {
        event.target.style.visibility = "visible";
    }, 500);
}, {once:true}
);

//keydown
document.addEventListener("keydown",event => {
    alert("You are supposed to be reading not typing!!!!");
    },
    {once:true}
);

//wheel

//drag/drop

//load
let dest_img = document.querySelector("#destination_img");

dest_img.addEventListener('load', () => {
    alert("Loaded");
});

//focus
let focusbutton = document.
getElementById("destination1");
console.log(focusbutton);
focusbutton.addEventListener('focus',event => {
    event.target.style.fontcolor = "orange";
    alert("Button Focus");
});
//resize

//scroll

//select
let textselect = document.getElementById("destinationh2");
console.log(textselect);
textselect.addEventListener('select', event => {
    alert("hello");
});
//dblclick

//nested

//prevent refresh

//Strech task: GASP

