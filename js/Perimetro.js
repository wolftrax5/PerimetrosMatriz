var matrizA;
var matrizResultante;
var filasA;
var colA;

function CrearMatriz(n,m){//para Crear la matriz 
	//Se Define el tamaño de la matriz
		this.length = n;
		for (var i=0;i<n;i++){
			this[i] = new Array(m);
		}
		return this;
}

function Generar (){
	filasA = parseInt(document.dimA.elements[0].value);
	colA = parseInt(document.dimA.elements[1].value);
	if (isNaN(filasA)|| isNaN(colA) ){
		alert("Valores no v\u00e1lidos. Son Nulls");
	}else{
		matrizA= new CrearMatriz(filasA,colA);
		CrearFormularioMatriz(filasA,colA);
	}
}
function CrearFormularioMatriz (filasA,colA ){
	var div = document.createElement("DIV");
	var formA = document.createElement("FORM");
	var A = document.createTextNode("Matriz A");

	div.setAttribute("id","matrices");
	div.setAttribute("align", "center");
    div.setAttribute("style", "width: 50%; height: 100%; float: left; background-color: 66FF66");
  	formA.setAttribute("name","matrizA")
  	//LLAMADO UN BOTON 
  	var boton = document.createElement("INPUT");
    boton.setAttribute("type", "button");
    boton.setAttribute("value", "CALCULAR");
// Le mandamos al html la creacion de la tabla por un formulario con casillas para llenar 
    for(i=0;i<filasA;i++){
	var salto = document.createElement("BR");
    	for(j=0;j<colA;j++){
    		var casilla = document.createElement("INPUT");
    		casilla.setAttribute("tipe","text");
    		casilla.setAttribute("size","4");

    		formA.appendChild(casilla);
    	}
    	formA.appendChild(salto);
    }
	var salto = document.createElement("BR");
    div.appendChild(salto);
    div.appendChild(A);
    div.appendChild(formA);
    div.appendChild(salto);
    div.appendChild(boton);
    //se obtiene le elemento div principal del index por su id 
    var divPrincipal = document.getElementById('main');
    divPrincipal.appendChild(div);
}










