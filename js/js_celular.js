alert("TRES USUARIOS QUIEREN SABER CUAL ES EL CELULAR MAS CARO QUE PUEDEN COMPRAR CON EL DINERO QUE TIENEN");

celular1=300000;
celular2=500000;
celular3=700000;
celular4=900000;
celular5=1000000;

usuario1Dinero=prompt("Cuanto dinero tiene el usuario 1?");
usuario2Dinero=prompt("Cuanto dinero tiene el usuario 2?");
usuario3Dinero=prompt("Cuanto dinero tiene el usuario 3?");


if(usuario1Dinero>=celular1 && usuario1Dinero<celular2){
    regreso=usuario1Dinero-celular1;
    alert("El usuario 1 debe comprar el celular 1 su valor es $"+celular1+" y el usuario 1 tiene $"+usuario1Dinero+" le sobra un total de $"+regreso);
}
else if(usuario1Dinero>=celular2 && usuario1Dinero<celular3){
    regreso=usuario1Dinero-celular2;
    alert("El usuario 1 debe comprar el celular 2 su valor es $"+celular2+" y el usuario 2 tiene $"+usuario1Dinero+" le sobra un total de $"+regreso);
}
else if(usuario1Dinero>=celular3 && usuario1Dinero<celular4){
    regreso=usuario1Dinero-celular3;
    alert("El usuario 1 debe comprar el celular 3 su valor es $"+celular3+" y el usuario 3 tiene $"+usuario1Dinero+" le sobra un total de $"+regreso);
}
else if(usuario1Dinero>=celular4 && usuario1Dinero<celular5){
    regreso=usuario1Dinero-celular4;
    alert("El usuario 1 debe comprar el celular 4 su valor es $"+celular4+" y el usuario 4 tiene $"+usuario1Dinero+" le sobra un total de $"+regreso);
}
else if(usuario1Dinero>=celular5){
    regreso=usuario1Dinero-celular5;
    alert("El usuario 1 debe comprar el celular 5 su valor es $"+celular5+" y el usuario 5 tiene $"+usuario1Dinero+" le sobra un total de $"+regreso);
}
else{
    alert("Al usuario 1 no le alcanza ningun celular")
}

if(usuario2Dinero>=celular1 && usuario2Dinero<celular2){
    regreso=usuario2Dinero-celular1;
    alert("El usuario 2 debe comprar el celular 1 su valor es $"+celular1+" y el usuario 2 tiene $"+usuario2Dinero+" le sobra un total de $"+regreso);
}
else if(usuario2Dinero>=celular2 && usuario2Dinero<celular3){
    regreso=usuario2Dinero-celular2;
    alert("El usuario 2 debe comprar el celular 2 su valor es $"+celular2+" y el usuario 2 tiene $"+usuario2Dinero+" le sobra un total de $"+regreso);
}
else if(usuario2Dinero>=celular3 && usuario2Dinero<celular4){
    regreso=usuario2Dinero-celular3;
    alert("El usuario 2 debe comprar el celular 3 su valor es $"+celular3+" y el usuario 3 tiene $"+usuario2Dinero+" le sobra un total de $"+regreso);
}
else if(usuario2Dinero>=celular4 && usuario2Dinero<celular5){
    regreso=usuario2Dinero-celular4;
    alert("El usuario 2 debe comprar el celular 4 su valor es $"+celular4+" y el usuario 4 tiene $"+usuario2Dinero+" le sobra un total de $"+regreso);
}
else if(usuario2Dinero>=celular5){
    regreso=usuario2Dinero-celular5;
    alert("El usuario 2 debe comprar el celular 5 su valor es $"+celular5+" y el usuario 5 tiene $"+usuario2Dinero+" le sobra un total de $"+regreso);
}
else{
    alert("Al usuario 2 no le alcanza ningun celular")
}

if(usuario3Dinero>=celular1 && usuario3Dinero<celular2){
    regreso=usuario3Dinero-celular1;
    alert("El usuario 3 debe comprar el celular 1 su valor es $"+celular1+" y el usuario 3 tiene $"+usuario3Dinero+" le sobra un total de $"+regreso);
}
else if(usuario3Dinero>=celular2 && usuario3Dinero<celular3){
    regreso=usuario3Dinero-celular2;
    alert("El usuario 3 debe comprar el celular 2 su valor es $"+celular2+" y el usuario 3 tiene $"+usuario3Dinero+" le sobra un total de $"+regreso);
}
else if(usuario3Dinero>=celular3 && usuario3Dinero<celular4){
    regreso=usuario3Dinero-celular3;
    alert("El usuario 3 debe comprar el celular 3 su valor es $"+celular3+" y el usuario 3 tiene $"+usuario3Dinero+" le sobra un total de $"+regreso);
}
else if(usuario3Dinero>=celular4 && usuario3Dinero<celular5){
    regreso=usuario3Dinero-celular4;
    alert("El usuario 3 debe comprar el celular 4 su valor es $"+celular4+" y el usuario 4 tiene $"+usuario3Dinero+" le sobra un total de $"+regreso);
}
else if(usuario3Dinero>=celular5){
    regreso=usuario3Dinero-celular5;
    alert("El usuario 3 debe comprar el celular 5 su valor es $"+celular5+" y el usuario 5 tiene $"+usuario3Dinero+" le sobra un total de $"+regreso);
}
else{
    alert("Al usuario 3 no le alcanza ningun celular")
}