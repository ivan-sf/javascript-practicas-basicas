class Calculadora{
    sumar (num1,num2){return parseInt(num1) + parseInt(num2)};
    restar (num1,num2){return parseInt(num1) - parseInt(num2)};
    multiplicar (num1,num2){return parseInt(num1) * parseInt(num2)};
    dividir (num1,num2){return parseInt(num1) / parseInt(num2)};
    potencia (num1,expo){return parseInt(num1)**parseInt(expo)};
    raizCuadrada (num){return Math.sqrt(num)};
    raizCubica (num){return Math.cbrt(num)};
}

alert("Que tipo de operacion desea realizar? Calculadora basica.")
operacion=prompt("Ingresa el numero correspondiente -- Suma:1 -- Resta:2 -- Multiplicacion:3 -- Division:4 -- Potencia:5 -- Raiz Cuadrada:6 -- Raiz Cubica:7");

const calculadora = new Calculadora();

if(operacion==1){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = calculadora.sumar(num1,num2);
    alert("El resultado es "+resultado);
}else if(operacion==2){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = calculadora.restar(num1,num2);
    alert("El resultado es "+resultado);
}

else if(operacion==3){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = calculadora.multiplicar(num1,num2);
    alert("El resultado es "+resultado);
}

else if(operacion==4){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = calculadora.dividir(num1,num2);
    alert("El resultado es "+resultado);
}
else if(operacion==5){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el exponente");
    let resultado = calculadora.potencia(num1,num2);
    alert("El resultado es "+resultado);
}
else if(operacion==6){
    num1=prompt("Ingrese el numero a operar");
    let resultado = calculadora.raizCuadrada(num1);
    alert("El resultado es "+resultado);
}
else if(operacion==7){
    num1=prompt("Ingrese el numero a operar");
    let resultado = calculadora.raizCubica(num1);
    alert("El resultado es "+resultado);
}