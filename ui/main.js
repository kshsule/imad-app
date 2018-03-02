console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "New Text";

var img = document.getElementById("dragon");
var moveLeft = 0;
function moveRight(){
    moveLeft = moveLeft + 1;
    img.style.marginLeft = moveLeft;
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
    
};
