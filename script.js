let cards = document.getElementsByClassName("card");
let modal = document.getElementById("modal");
let bigImg = document.getElementsByClassName("bigImg")[0];
let right = document.getElementById("right");
let left = document.getElementById("left");
let bay = 0;
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    modal.style.transform = "translateY(0)";
    modal.style.transition = "1s";
    bigImg.src = "img/" + i + ".jpg";
    bay = i;
  };
}
right.style.lineHeight = window.innerHeight + "px";
left.style.lineHeight = window.innerHeight + "px";
// card.onclick=function(){
//     right.style.paddingTop="20%";
//     left.style.paddingTop="20%";
// }
right.onclick = function () {
  // bigImg.src="img/"+i+".jpg"
  bay = bay + 1;
  if (bay > cards.length-1) {
    bay = 0;
  }
  bigImg.src = "img/" + bay + ".jpg";
}
left.onclick = function () {
  // bigImg.src="img/"+i+".jpg"
  bay = bay - 1;
  if (bay < 0) {
    bay = cards.length-1;
  }
  bigImg.src = "img/" + bay + ".jpg";
}
bigImg.onclick=function() {
  modal.style.transform = "translateY(-100%)";
}