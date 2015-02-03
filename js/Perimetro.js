var matrizA;
var matrizResultante;
var filasA;
var colA;
var contador = 0;
//contador cuenta las veces que se accede, para que si no es la primera, se borren las capas creadas previamente.


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
        if (contador > 0) {
          Borrar()
        }
		matrizA= new CrearMatriz(filasA,colA);
		CrearFormularioMatriz(filasA,colA);
        matrizResultante = new CrearMatriz(filasA,colA);
        CrearFormularioResultante(filasA,colA);
        contador ++;
	}
}
function CrearFormularioMatriz (filasA,colA ){
	var div = document.createElement("DIV"); // dentro de este div ira el formularo para la matriz 
	var formA = document.createElement("FORM"); // se generara un formulario para colocar las casillas
	var A = document.createTextNode("Matriz A");
     //Atributos para reconocer el div, estilos 
	div.setAttribute("id","matrices");
	div.setAttribute("align", "center");
    div.setAttribute("style", "width: 50%; height: 100%; float: left; background-color: 66FF66");
  	//atibuto para reconocer la matrizA
    formA.setAttribute("name","matrizA")
  	//se genrera un boton para que calular lo que necesistes 
  	var boton = document.createElement("INPUT");
    boton.setAttribute("type", "button");
    boton.setAttribute("value", "CALCULAR");
    boton.setAttribute("name" ,"button");
    boton.onclick= function(){Mostrar();} // se le asigna la funcion Mostrar 
        // Le mandamos al html la creacion de la tabla por un formulario con casillas para llenar 
    for(i=0;i<filasA;i++){
	var salto = document.createElement("BR"); // se crea un br para ir saltanod las filas de las casillas en el html
    	for(j=0;j<colA;j++){
    		var casilla = document.createElement("INPUT"); // las casillas son inputs de texto
    		casilla.setAttribute("tipe","text");
    		casilla.setAttribute("size","4");

    		formA.appendChild(casilla);
    	}
    	formA.appendChild(salto); // damos el salto en el html
    } 
	var salto = document.createElement("BR"); // se vuelve a crear el salto ya que quedo destruido en el for 
    div.appendChild(salto); // se agrega el salto 
    div.appendChild(A); // se agrega el nodo 
    div.appendChild(formA); // se agrega el formulario
    div.appendChild(salto); //damos otro salto 
    div.appendChild(boton); // agregamos el boton 
    //se obtiene el  elemento div principal del index por su id 
    var divPrincipal = document.getElementById('main');
    divPrincipal.appendChild(div); // agremamos todo lo  que le agregamos al div para mostrar lo en el index.html
}

function CrearFormularioResultante(filasA,colA){
    var div = document.createElement("DIV");
    var formResultante = document.createElement("FORM");
    var res = document.createTextNode("Matriz Resultante");
    div.setAttribute("id","resultado");
    div.setAttribute("align","center");
    //Esta es la matriz reusltante la cual se idetificara con el nombre matrizR
    formResultante.setAttribute("name","matrizR");

    for(i=0;i<filasA;i++){
        var salto = document.createElement("BR");
        for(j=0;j<colA;j++){
            var casilla = document.createElement("INPUT");
            casilla.setAttribute("type","text");
            casilla.setAttribute("size","4");
            casilla.setAttribute("name","text");
            casilla.readOnly ="true";
            formResultante.appendChild(casilla);
        }
        formResultante.appendChild(salto);
    }
    var salto = document.createElement("BR");
    div.appendChild(salto);
    div.appendChild(res);
    div.appendChild(formResultante);

    var divPrincipal=document.getElementById("main");
    divPrincipal.appendChild(div);
}




function inicializar(){
    // se llena la matriz resultante de 0
    for(i =0 ; i<matrizResultante.length;i++){
        for(j=0;j<matrizResultante.length;j++){
            matrizResultante[i][j]=0;
        }
    }
}
function Evaluar (){
    inicializar()
    //Aqui se ara el metodo para lo que se quiere lograr 

    var puntos= new Array();

    //aqui solo la igualo 
    for(i=0;i<filasA;i++){
            var punto = {x:0,y:0};
        for(j=0;j<colA;j++){
            if ( matrizA[i][j] == 1 )
            {   punto.x= j;
                punto.y=j;
                puntos.push(punto);
                matrizResultante[i][j]=matrizA[i][j];
                }
        }
    }
    console.log(puntos);
}
function Cargar(){

    var q =0; // valirable para recorrer los elmentos del objeto
    for (i=0;i<filasA;i++){
        for(j=0;j<colA;j++){
            matrizA[i][j]= parseInt(document.matrizA.elements[q].value);
            q++;
        }
    }
  Evaluar()
}
function Mostrar(){

    Cargar()

     var q =0; //Variable para recorrer los elemntos 
    for (var i = 0; i < matrizResultante.length; i++) {
            for (var j = 0; j < matrizResultante.length; j++) {
                if(matrizResultante[i][j]==1){ 
                document.matrizR.elements[q].value = matrizResultante[i][j]; //se asigna el valor al text de la matriz
                document.matrizR.elements[q].setAttribute("style","background:red; color:white"); // se resaltan las casillas que tengan un valor 
              }
              matrizResultante[i][j]=0; // se limpia la matris 
                q++;//incremento para el recorrido de elmentos 
            }
    }
}

function Borrar(){ 
    var mat =  document.getElementById("matrices");
    var padre1 = mat.parentNode;
    padre1.removeChild(mat);
    }





