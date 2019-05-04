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
// let dest_img = document.querySelector("#destination_img");

// dest_img.addEventListener('load', () => {
//     alert("Loaded");
// });

//focus
let focush2 = document.getElementById("destinationh2");
focush2.addEventListener("focus", event => {
    event.target.style.background = "orange";
    alert("Focus");
});

//resize

//scroll

//select
let textselect = document.getElementById("textselection");
textselect.addEventListener("select", event => {
    event.target.style.color = "orange";
});

//dblclick
let doubleclick = document.getElementById("btn1");
doubleclick.addEventListener('dblclick', event => {
    alert("Double Click");
});

//nested

//prevent refresh

//Strech task: GASP

