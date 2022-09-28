let cards=document.getElementsByClassName("card");
let modal=document.getElementById("modal");
let bigImg=document.getElementsByClassName("bigImg")[0];
let right=document.getElementById("right");
let left=document.getElementById("left");

console.log(cards)
for(let i = 0; i < 13; i++){
    cards[i].onclick=function(){
        modal.style.transform="translateY(0)"
        modal.style.transition="1s"
        bigImg.src="img/"+i+".jpg"
    }
}
right.style.lineHeight=window.innerHeight+"px";
left.style.lineHeight=window.innerHeight+"px";
// card.onclick=function(){
//     right.style.paddingTop="20%";
//     left.style.paddingTop="20%";
// }