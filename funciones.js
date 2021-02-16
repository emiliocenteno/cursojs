
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
function cuentaCaracteres(cadena) {

    let cuenta;
    let length = 0;
    cuenta = cadena.length

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

function textoRecortado(cadena, corte) {

    let length = 0;
    let subcadena;
    while (cadena[length] !== undefined) {

        if (length == corte) {
            console.log(cadena[length])
            break;
        }
        length++
        subcadena = cadena.substring(0, length);
    }
    console.log(`==================================EJERCICIO 2==================================`)
    console.log(`textoRecortado(${cadena},${corte}) Resultado: ${subcadena}`);
}

textoRecortado("hola a todos", 4)


/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
function devuelveArray(cadena, ciertoCaracter) {
    let length = 0;
    let s = new Array();
    let c
    let ind = 0;
    let x = "";

    while (cadena[length] !== undefined) {
    
        if (cadena[length] !== ciertoCaracter) {
            x = x + cadena[length];
        }
        else {
            ind++
            x = '';
        }
        ///var score = pattern.Gotoccurance.score !=null ? pattern.Gotoccurance.score : '0';
    
        s[ind] = x;
      
        length++
    }
    console.log(`==================================EJERCICIO 3==================================`)
    console.log(`devuelveArray(${cadena},${ciertoCaracter}) Resultado: ${s}`);
   // console.log(s);
}
devuelveArray('hola que tal', ' ');

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/ 
function repiteCaracter(texto, nVeces)
{

let cadena='';

for (let index = 0; index < nVeces; index++) {
    cadena =cadena +  texto;
}
console.log(`==================================EJERCICIO 4==================================`)

console.log(`devuelveArray(${texto},${nVeces}) Resultado: ${cadena}`);
}

repiteCaracter('A',10);