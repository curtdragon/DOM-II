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
document.addEventListener("keydown",() => {
    alert("You are supposed to be reading not typing!!!!");
    },
    {once:true}
);

//wheel
let wheelitem = document.getElementById("funbustext");
wheelitem.addEventListener("wheel" , () => {
    wheelitem.style.fontSize = "3.6rem";
});

//drag/drop
let dragitem = document.querySelector(".rounded");
let adventure = document.querySelector("#adventure");
dragitem.addEventListener("drag", event => {
    //Prevent Default
    event.preventDefault()
    adventure.style.color = "blue";
});

//load
window.addEventListener("load", () => {
    alert("Document Loaded");
},
    { once: true }
);

//focus
let focush2 = document.getElementById("destinationh2");
focush2.addEventListener("focus", event => {
    event.target.style.background = "orange";
    alert("Focus");
});

//resize
window.addEventListener("resize", () => {
    alert("You are resizing");
},
    { once: true }
);

//scroll
document.addEventListener("scroll", () => {
    alert("You are scrolling");
},
   { once: true }
);

//select
let textselect = document.getElementById("textselection");
textselect.addEventListener("select", event => {
    event.target.style.color = "orange";
});

//dblclick
let doubleclick = document.getElementById("btn1");
doubleclick.addEventListener('dblclick', () => {
    alert("Button Double Click");
    event.stopImmediatePropagation();
});


let propdoubleclick = document.querySelector(".destination");
propdoubleclick.addEventListener('dblclick', () => {
    alert("Destination Double Click");
});

//Doubleclick stop propagation


//Strech task: GASP

