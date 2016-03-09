function bucle(){




	
	var vn=0;
	var vp=0;
	var m=0;
	var p=0; 
	var n=0;


for (var i = 1; i <= 10; i++) {
	
	 n= parseInt(prompt("ingrese "+i+" Numero"))
	
if (n>0) {
 
  vp=vp+1;
	 }else{
   vn=vn+1;
	 }
	
if (n % 15==0) {
m=m+1;
}
if(n % 2==0)	 	
p=p+n;
	}

document.write("<center>"+"<h2>" +"la cantidad de valores negativos es  "+vn+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"la cantidad de valores positivos es "+vp+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"los multiplos de 15 son "+m+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"la suma de los pares es "+p+ "<h2/>"+"</center>")
}