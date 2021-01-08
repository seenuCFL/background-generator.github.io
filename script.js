var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var copyButton = document.getElementById("copyButton");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	document.getElementsByTagName("h3")[0].innerHTML = body.style.background + ";";
}
function copyText(){
	var text = document.getElementsByTagName("h3")[0].innerHTML;
	var elem = document.createElement("textarea");
	document.body.appendChild(elem);
	elem.value = text;
	elem.select();
	document.execCommand("copy");
	document.body.removeChild(elem);
	alert("Copied the text : " + "\"" + text + "\"");
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener('load', (event) => {
	setGradient();
});

copyButton.addEventListener("click", copyText);