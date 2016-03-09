function bucle(){


var n;
var cont=0,cont1=0,cont2=0,cont3=0;
var x,y;

n= parseInt(prompt("ingrese el Numero  de cordenas (x,y)",""))
for (var i = 1; i <= n; i++) {
	
	 x = parseInt(prompt("ingrese x "+i+" Numero"))
	 y = parseInt(prompt("ingrese y"+i+" Numero"))
	 if(x>0 && y>0){
	 	cont=cont+1
	 }else if (x<0 && y>0) {
	cont1=cont1+1
	 }else if (x<0 && y<0) {
	cont2=cont2+1
	 }else if (x>0 && y<0) {
	 		cont3=cont3+1
	 }
	 		

	} 
document.write("<center>"+"<h2>" +"los puntos en el cuadrante 1 : "+cont+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"los puntos en el cuadrante 2 : "+cont1+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"los puntos en el cuadrante 3 : "+cont2+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"los puntos en el cuadrante 4 : "+cont3+ "<h2/>"+"</center>")
}