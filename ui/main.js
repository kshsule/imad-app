console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "New Text";

var img = document.getElementById("dragon");
var moveLeft = 0;
function moveRight(){
    moveLeft = moveLeft + 5;
    img.style.marginLeft = moveLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
    
};
