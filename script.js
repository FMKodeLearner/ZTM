var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomBack(){
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ (Math.floor(Math.random() * 255) + 1) 
	+ ", " 
	+ (Math.floor(Math.random() * 255) + 1)
	+ ", " 
	+ (Math.floor(Math.random() * 255) + 1)
	+ "), rgb(" 
	+ (Math.floor(Math.random() * 255) + 1) 
	+ ", " 
	+ (Math.floor(Math.random() * 255) + 1) 
	+ ", " 
	+ (Math.floor(Math.random() * 255) + 1) 
	+ "))";
	css.textContent = body.style.background;
}

button.addEventListener("click", randomBack);

function oi(){
	alert("Nesta página você escolherá 6 números que determinarão a cor do background da página. Vamos lá!");
	var number1 = prompt("Número 1: Selecione um valor entre 0 e 255: ");
		if (number1 > 255 || number1 < 0)
			{alert("Número escolhido inválido.")}
	var number2 = prompt("Número 2: Selecione um valor entre 0 e 255: ");
		if (number2 > 255 || number2 < 0)
			{alert("Número escolhido inválido.")}
	var number3 = prompt("Número 3: Selecione um valor entre 0 e 255: ");
		if (number3 > 255 || number3 < 0)
			{alert("Número escolhido inválido.")}
	var number4 = prompt("Número 4: Selecione um valor entre 0 e 255: ");
		if (number4 > 255 || number4 < 0)
			{alert("Número escolhido inválido.")}	
	var number5 = prompt("Número 5: Selecione um valor entre 0 e 255: ");
		if (number5 > 255 || number5 < 0)
			{alert("Número escolhido inválido.")}
	var number6 = prompt("Número 6: Selecione um valor entre 0 e 255: ");
		if (number6 > 255 || number6 < 0)
			{alert("Número escolhido inválido.")}
		body.style.background = 
		"linear-gradient(to right, rgb(" 
		+ number1 
		+ ", " 
		+ number2
		+ ", " 
		+ number3
		+ "), rgb(" 
		+ number4 
		+ ", " 
		+ number5 
		+ ", " 
		+ number6 
		+ "))";
	css.textContent = body.style.background;
}