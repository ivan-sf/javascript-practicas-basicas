alert("Un mini sistema en el que se registran el numero de empleados que se desee se les da el nombre y con la letra p se agrega asistencia si tiene menos de 4 asistencias el sistema aconseja enviar un memorando o tomar acciones.")
let cantidad = prompt("Cuantos empleados son?");
let listaempleados=[];

for(i=0;i<cantidad;i++){
    listaempleados[i] = [prompt("Nombre del empleado "+(i+1)),0];
}

const asistencia = (nombre,empleado)=>{
    let presencia = prompt(nombre);
    if(presencia=='p' || presencia=='P'){
        listaempleados[empleado][1]++;
    }
}

for(i=0;i<10;i++){
    for(empleado in listaempleados){
        asistencia(listaempleados[empleado][0],empleado);
    }
}

for (empleado in listaempleados){
    let resultado = `Empleado: ${listaempleados[empleado][0]} <br>
    _____Asistencias: ${listaempleados[empleado][1]} <br>
    _____Faltas: ${10-listaempleados[empleado][1]} <br>
    `;
    if(listaempleados[empleado][1]<=4){
        resultado+=`
        <b style="color:red">El empleado falto mas de lo debido debe enviar un memorando o tomar acciones</b> <br><br>
        `
    }else{
        resultado+=`<br><br>`
    }
    document.write(resultado);
}
