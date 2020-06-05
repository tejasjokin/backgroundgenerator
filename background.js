var css = document.querySelector('h3');
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById('gradient');
var linebrk=document.createElement("br");
var button=document.getElementById("btn");

css.textContent="linear-gradient(to right, red , yellow);";

color1.setAttribute("value","#00ff00");

color2.setAttribute("value","#ff0000");

function setGradient()
{
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	button.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent=body.style.background + ";";
}

function Random()
{
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	color1.setAttribute("value",randomColor1);
	color2.setAttribute("value",randomColor2);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
