let datos = [
    {nombre:"Ismael",
     año:"2014"},
    {nombre:"Estela",
     año:"2014"}
];

const obtenerInfo = function(id){
    return new Promise((resolve,reject)=>{
        if(datos[id]==undefined) reject("No se encontro la informacion");
        else resolve(datos[id]);
    })
}

id=1;

obtenerInfo(id).then((persona)=>{
    console.log(persona.nombre);
    console.log(persona.año);
}).catch((e)=>{
    console.log(e);
})