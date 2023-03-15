//### Arrays ###

let arrayVacio = [];

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

let arrayNumerosPares = [0,2,4,6,8];

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];


//### Funciones ###

//[ ] 5.
function suma(num1, num2){

    return (num1 + num2)
    
}


//[ ] 6.
function potenciacion(N1, N2){

    let resultado = 1;
    for (let i = 0; i < N2; i++) {
        resultado = resultado * N1;
    }
    return resultado;
     
}

// un bucle for para multiplicar la base N1 por sí misma N2 veces 
// y almacenar el resultado en la variable resultado. 
// La variable resultado se inicia en 1 para que la multiplicación funcione 



// [ ] 7.- [ ] 7.- Créez la fonction **separarPalabras** qui accepte 
//**une chaîne** comme argument et renvoie **un tableau de mots 
// 'hello world' => [hello, world]**

function separarPalabras(string){
        
    return string.split (" ")
    }

separarPalabras("Hola Mundo")



//[ ] 8.

function repetirString(String, Numero){

    let concatenar = "";
    for (let i=0; i < Numero; i++){

        concatenar += String
    }
    
    console.log(concatenar)
    return concatenar;
}

repetirString("ja", 6)


//----------------------------
//exemple:
// let num = 5
// let str = ""
// const char = "*"

// for (let i=0; i < num; i++){

//     str += char  //concatenar (str = str + char)
// }
// console.log(str)


// //[ ] 9.

function esPrimo(n){
    if (n<=1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false;
    return true;
}

