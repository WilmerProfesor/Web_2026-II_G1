//. ----- Tipos de variable ------

var x=5;  // deprecado 
let y=8.7;
let y2=true;
let y3= 5;
let y4="hola mundo";
let y5= {nombre:"wilmer", edad: 37, sexo:true}; //const
let y6= ()=>{return 5};
let y7=[true, 5, "cadena",[2,34,5]];  //const
const y8=[3,5,6];
y8.push(8);

console.log(y8)

// y="HOla"
console.log(x+4);
// console.log(y+4);
console.log(typeof(y))
console.log(typeof(y2))
console.log(typeof(y3))
console.log(typeof(y4))
console.log(typeof(y5))
console.log(typeof(y6))
console.log(typeof(y7))

console.log("XXX");

//alert("Esta es una salida estándar similar a JOptionPane.showMessageDialog");
//let variable=prompt("Esta es una entrada JOptionPane.showInputDialog");

/*OPERADORES

>
<
>=
<=
==
!=
===
!==

*/

let a=5;
let b="5";

console.log(a);
console.log(b);
console.log(typeof(a));
console.log(typeof(b));

if(a===b){
    console.log("Iguales");    
}else{
    console.log("DIferentes");    
}

switch(a){
    case 1:
        console.log("Es uno");
        break;
    case 2:
        console.log("Es dos");
        break;
    case 3:
        console.log("Es tres");
        break;
    default:
        console.log("No es ninguno de los anteriores");
}

let variable=0;
for(let i=0; i<10; i++){
    console.log("i: "+i);
    // variable=prompt("Ingrese un valor");
}

let i=0;
while(i<10){
    console.log("i: "+i);
    i++;
}
