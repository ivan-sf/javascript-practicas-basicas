const sumar = (num1,num2)=>{return parseInt(num1) + parseInt(num2)};
const restar = (num1,num2)=>{return parseInt(num1) - parseInt(num2)};
const multiplicar = (num1,num2)=>{return parseInt(num1) * parseInt(num2)};
const dividir = (num1,num2)=>{return parseInt(num1) / parseInt(num2)};

alert("Que tipo de operacion desea realizar? Calculadora basica.")
operacion=prompt("Ingresa el numero correspondiente -- Suma:1 -- Resta:2 -- Multiplicacion:3 -- Division:4");

if(operacion==1){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = sumar(num1,num2);
    alert("El resultado es "+resultado);
}else if(operacion==2){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = restar(num1,num2);
    alert("El resultado es "+resultado);
}

else if(operacion==3){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = multiplicar(num1,num2);
    alert("El resultado es "+resultado);
}

else if(operacion==4){
    num1=prompt("Ingrese el primer numero a operar");
    num2=prompt("Ingrese el segundo numero a operar");
    let resultado = dividir(num1,num2);
    alert("El resultado es "+resultado);
}