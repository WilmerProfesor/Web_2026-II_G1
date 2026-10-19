for (let a = 0; a < 10; a++) {
    if(a==5){
        continue; // la iteración que cumpla la condición no se ejecuta, pero el ciclo sigue
    }
    console.log(a);    
}

for (let a = 0; a < 10; a++) {
    if(a==5){
        break; // la iteración que cumpla la condición no se ejecuta y el ciclo termina
    }
    console.log(a);    
}

console.log("----------------------");

const array=[1,2,3];
const arrayB=[3,3,3];
const array2=[1,"dos",3,{a:12, b:34},5,[3,4,5,6],7,true,9,10];
const matriz=[[1,2,3],[4,5,6],[7,8,9]];

array.push(4);
array.unshift(0);
console.log(array);
array.pop();
array.shift();
array.splice(1,1); // elimina el elemento en la posición 1, la cantidad de elementos a eliminar es 1 (segundo parámetro)
console.log(array);

console.log(arrayB.join(" - ")); // convierte el array en un string, separando los elementos por el parámetro que se le pase
console.log(array.concat(arrayB)); // concatena dos arrays, pero no modifica el array original   
console.log(array.slice(1,3)); // devuelve un nuevo array con los elementos desde la posición 1 hasta la posición 3 (sin incluir el elemento en la posición 3). // substring de java


// console.log(array2);
// console.log(matriz);

// for(let item of array2){
//     console.log(typeof(item));
// }

// ---------------- FUNCIONES -------------- 
function suma(a,b){
    return a+b;
}

const valor= suma(5,6);
const valor2= suma;

console.log(valor);
console.log(valor2);


console.log(suma(5,6));

// ---------------- FUNCIONES ANÓNIMAS --------------
const resta= function(a,b){ 
    return a-b;
}; 
console.log(resta(4,2));

// ---------------- FUNCIONES FLECHA --------------

// estructura de las funciones flecha
// const nombreFuncion = (parametros) => {cuerpo de la función}
// const nombreFuncion = (parametros) => cuerpo de la función // return implícito



const multiplicacion= (a,b) => a*b;
//const multiplicacion2= (a,b) => {a*b}; // return implícito no funciona si se usan llaves, hay que usar return explícito
const multiplicacion3= (a,b) => {return a*b}; // return explícito
const multiplicacion4= (a) => {return a*5}; // return explícito
const multiplicacion5= a => {return a*5}; // return explícito
console.log(multiplicacion5(4));
 
// ()=>{return ___}
// ()=> xxxxx;
// a => xxxxx;
// a => {return xxxxx};

