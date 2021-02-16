
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
function cuentaCaracteres(cadena) {

    let cuenta;
    let length =0 ;
    cuenta = cadena.length


   /// length = 0;
    while (cadena[length] !== undefined) {
        length++
    }
    console.log(`==================================EJERCICIO 1==================================`);
    console.log(`cuentaCarcadena (${cadena}) Resultado: ${length}`);
 
}

cuentaCaracteres("Hola Mundo");

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function textoRecortado(cadena, corte ){

let length =0;
  /// length = 0;
  let subcadena;
  while (cadena[length] !== undefined) {
  
    if (length == corte) { 
        console.log(cadena[length] )
        break; 
    }
    length++
    subcadena= cadena.substring(0,length);
}
console.log(`==================================EJERCICIO 2==================================`)
//console.log(subcadena)
console.log(`textoRecortado(${cadena},${corte}) Resultado: ${length}`);
}

textoRecortado("hola a todos",4)
