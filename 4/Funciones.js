function bucle(){




	var n ;
n= document.getElementById("n").value;
for (var i = 1; i <= 12; i++) {
	
	
	var node = document.createElement("p");
	
	
	var textnode = document.createTextNode(n*i);

	
	node.appendChild(textnode);

	
	document.getElementById("respuesta").appendChild(node);

	 }

	 	

	}

