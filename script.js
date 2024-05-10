var cursor =document.querySelector('#cursor')
var main =document.querySelector('#main')


main.addEventListener('mousemove',function(dets){
    cursor.style.left = `${dets.x + 10}px`
    cursor.style.top = `${dets.y + 10}px`
})


document.querySelector("#overlay1").addEventListener("mousemove",function(dets){
    document.querySelector("#elem1 video").style.scale= 1;
    document.querySelector("#elem1 video").style.opacity= 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem1 video").style.left = (dets.x- 375 )+ "px";
    document.querySelector("#elem1 video").style.top = (dets.y- 430)+ "px";
})

document.querySelector("#overlay1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem1 video").style.scale= 0;
    document.querySelector("#elem1 video").style.opacity= 0;
    cursor.style.opacity = 1;
})




document.querySelector("#overlay2").addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 video").style.scale= 1;
    document.querySelector("#elem2 video").style.opacity= 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem2 video").style.left = (dets.x- 710 )+ "px";
    document.querySelector("#elem2 video").style.top = (dets.y- 375)+ "px";
})

document.querySelector("#overlay2").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem2 video").style.scale= 0;
    document.querySelector("#elem2 video").style.opacity= 0;
    cursor.style.opacity = 1;
})






document.querySelector("#overlay3").addEventListener("mousemove",function(dets){
    document.querySelector("#elem3 video").style.scale= 1;
    document.querySelector("#elem3 video").style.opacity= 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem3 video").style.left = (dets.x- 1100 )+ "px";
    document.querySelector("#elem3 video").style.top = (dets.y - 400)+ "px";
})

document.querySelector("#overlay3").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem3 video").style.scale= 0;
    document.querySelector("#elem3 video").style.opacity= 0;
    cursor.style.opacity = 1;
})