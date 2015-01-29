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
	}
}
