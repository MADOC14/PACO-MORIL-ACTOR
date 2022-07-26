/* ARRAY DE IMAGENES */
ads = new Array(3);
ads [0] = "images/pacomorilcolor6.jpg";
ads [1] = "images/pacomorilbn8.jpg";
ads [2] = "images/pacomorilcolor2.jpg";

/* ARRAY DE URL */
arrayURLs = new Array(3);

arrayURLs [0] = "conoceme.html";
arrayURLs [1] = "conoceme.html";
arrayURLs [2] = "conoceme.html";


// variable para llebar la cuenta de imagenes
var longitudArray = ads.length;
var contador = 0;

//cojemos un numero aleatorio
contador = Math.floor((Math.random() * longitudArray));

//declarando variables de tiempo 
var tiempo = 3; //en seg
var timer = tiempo * 1000;

// funciones para cambiar de imagen cada x segundos
function banner() {
    contador++;
    contador = contador % longitudArray;
    document.banner.src = ads[contador];
    setTimeout("banner()", timer);
}

function ponerURL() {
    contador2 = contador;
    url = window.open(arrayURLs[contador]);
    return false;
}