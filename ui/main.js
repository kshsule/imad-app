console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "New Text";

var img = document.getElementById("dragon");
img.onclick = function(){
    img.style.marginLeft = '150px';
};