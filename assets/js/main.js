var product_imgs= Array.from(document.querySelectorAll(".product_img"));
var my_modal= document.querySelector(".my_modal");
var modal_img =document.querySelector(".modal_img");
var close_icon= document.querySelector(".close_icon");
var left_arrow=document.querySelector(".left_arrow");
var right_arrow=document.querySelector(".right_arrow");
var modal_open=false;
var curren_index;
 

 
function showModal(){
    my_modal.classList.add("show_modal");
    modal_open=true;
}

function putImgInModal(imgSrc){
   modal_img.setAttribute("src",imgSrc);
}

function hideModal(){
    my_modal.classList.remove("show_modal");
    modal_open=false;
}

function toNextImg(){
    curren_index=(curren_index+1)%product_imgs.length;
    // عبارة عن رابط الصورة اللاحقة
    putImgInModal(product_imgs[curren_index].getAttribute("src"));
}
function toPreviousImg(){
    curren_index--;
    if (curren_index==-1){
      curren_index=product_imgs.length-1;
    }
    putImgInModal(product_imgs[curren_index].getAttribute("src"));
}

for (var i = 0; i <product_imgs.length; i++) {
product_imgs[i].onclick= function(e){
     showModal();
     putImgInModal(e.target.getAttribute("src"));
     curren_index=product_imgs.indexOf(e.target);
}    
}

close_icon.onclick=function(){
    hideModal();
}
document.onclick=function(e){
    if (modal_open && e.target.classList.contains("my_modal")){
        hideModal();
    }
}

right_arrow.onclick= toNextImg;
 
left_arrow.onclick=toPreviousImg;

// keyboard events:
document.onkeydown =function(e){
console.log(e);
if (e.code=="ArrowRight"){
    toNextImg();
}
else if (e.code=="ArrowLeft"){
    toPreviousImg();
}
else if( e.code=="Escape"){
    hideModal();
}

}




