function bucle(){

document.write("<center>"+"<h1>" +"ingrese 10 numeros"+ "<h1/>"+"</center>")

var numeros;
var acum=0;

for (var i = 1; i <= 10; i++) {
	
	 numeros = parseInt(prompt("ingrese "+i+" Numero"))
	 if(i>5){
	 	acum=acum+numeros;
	 }

	 	

	}
document.write("<center>"+"<h2>" +"la suma es "+acum+ "<h2/>"+"</center>")
}