// const el = $("p")
// const el1 = document.getElementsByTagName("p")
// const el2 = document.querySelectorAll("p")

// const el = $("#hello")
// let el1=$("p")
// const el2=$("#hello")
// const el = $(".world")

// console.log(el2)
// ==================DOM Manipulation======

// let H1 =$("h1");

// //.html mirip inneerHTML
// H1.html("Text telah berganti dari texs pertame ke texs ini");

// //attr
// // let inp= $(".input");
// // inp.attr("type","checkbox")

// //addCalss()
// H1.addClass("red")
// H1.addClass("blue")

// //removeCalss
// H1.removeClass("blue");

// //css
// H1.css({
//     border : "2px solid black",
//     backgroundColor :"gray"
// })

// ===========Dom Even atau aksi===============


// var el=$(".input");
// el.mouseenter(function () {
//     el.css("border", "3px solid orange")
// })


// var h1= $("h1");
// h1.hover(function () {
//     h1.css("color", "pink")
// })

// ===============ANIMATION=============
let el=$("div")
let hide=$("#hiden")
let showUp =$("#show")
var down =$("#down")
var togg=$("#Toggle")

hide.on("click",function () {
    el.hide("slow");
})

showUp.on("click",function () {
    el.slideUp("slow",function () {
        // code animasi
        el.css("scle", 2)
    });
});

down.on("click",function () {
    el.slideDown("slow", function () {
        el.css("scle", 2)
    })
})

togg.on("click", function () {
    el.slideToggle("slow")
})