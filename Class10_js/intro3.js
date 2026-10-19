const objeto={nombre:"Juan", edad:30, ciudad:"Madrid", mujer:false}; // atributos de un objeto
//key: valor
console.log(objeto.nombre); // Acceder a la propiedad "nombre"
console.log(objeto["edad"]); // Acceder a la propiedad "edad" usando notación de corchetes

objeto.ciudad = "Barcelona"; // Modificar la propiedad "ciudad"
console.log(objeto.ciudad);

objeto.pais = "España"; // Agregar una nueva propiedad "pais"
console.log(objeto.pais);

class Persona{
    constructor(nombre, edad, ciudad, mujer){
        this.nombre=nombre;
        this.edad=edad;
        this.ciudad=ciudad;
        this.mujer=mujer;
    }  
    
    cumplirAnios(){
        this.edad++;
    }
}

const persona1=new Persona("Juan",30,"Madrid",false);
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.ciudad);
console.log(persona1.mujer);
persona1.cumplirAnios();
console.log(persona1.edad);

class Persona2{
    constructor(objeto){
        this.nombre=objeto.nombre;
        this.edad=objeto.edad;
        this.ciudad=objeto.ciudad;
        this.mujer=objeto.mujer;
    }
}

const AtributoObjeto={nombre:"Maria", edad:25, ciudad:"Barcelona", mujer:true};
const persona2=new Persona2(AtributoObjeto);
console.log(persona2.nombre);
console.log(persona2.edad);
console.log(persona2.ciudad);
console.log(persona2.mujer);
