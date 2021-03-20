let nombre = "Issmael";
const promesa = new Promise((resolve,reject)=>{
    if(nombre=="Ismael") resolve(nombre);
    else reject("Error el nombre es diferente");
});
promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e);
})