const img1=document.querySelector(".img1");
const L21=document.querySelector(".L21")
const L22 =document.querySelector(".L22")
const L23=document.querySelector(".L23")
const L21a=document.querySelector(".L21a")
const L22a =document.querySelector(".L22a")
const L23a=document.querySelector(".L23a")


img1.addEventListener("click",function(){
    window.scrollTo({top: 0,behavior: "smooth"});
});

L21.addEventListener("hover", function () {
    L21a.style.transform = "translateX(25%)";
});

var L1= document.querySelector(".L1")
var overlay=document.querySelector(".overlay")
var L1H1 = document.querySelector(".L1H1")

var R11a= document.querySelector(".R11a")
var overlay1=document.querySelector(".overlay1")
var R1ah1 = document.querySelector(".R1ah1")

var R11b= document.querySelector(".R11b")
var overlay2=document.querySelector(".overlay2")
var R1bh1 = document.querySelector(".R1bh1")

var R11c= document.querySelector(".R11c")
var overlay3=document.querySelector(".overlay3")
var R1ch1 = document.querySelector(".R1ch1")

var R11d= document.querySelector(".R11d")
var overlay4=document.querySelector(".overlay4")
var R1dh1 = document.querySelector(".R1dh1")

L1.addEventListener("mouseover",function(){
    overlay.style.transform = "translateY(0%)"
    L1H1.style.display ="none"
})
L1.addEventListener("mouseleave",function(){
    overlay.style.transform = "translateY(100%)"
    L1H1.style.display ="initial"
})

R11a.addEventListener("mouseover",function(){
    overlay1.style.transform = "translateY(0%)"
    R1ah1.style.display ="none"
})
R11a.addEventListener("mouseleave",function(){
    overlay1.style.transform = "translateY(100%)"
    R1ah1.style.display ="initial"
})

R11b.addEventListener("mouseover",function(){
    overlay2.style.transform = "translateY(0%)"
    R1bh1.style.display ="none"
})
R11b.addEventListener("mouseleave",function(){
    overlay2.style.transform = "translateY(100%)"
    R1bh1.style.display ="initial"
})

R11c.addEventListener("mouseover",function(){
    overlay3.style.transform = "translateY(0%)"
    R1ch1.style.display ="none"
})
R11c.addEventListener("mouseleave",function(){
    overlay3.style.transform = "translateY(100%)"
    R1ch1.style.display ="initial"
})

R11d.addEventListener("mouseover",function(){
    overlay4.style.transform = "translateY(0%)"
    R1dh1.style.display ="none"
})
R11d.addEventListener("mouseleave",function(){
    overlay4.style.transform = "translateY(100%)"
    R1dh1.style.display ="initial"
})

$(document).ready(function(){
    $('.employees').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
    //   autoplay:true
    });
  });

  