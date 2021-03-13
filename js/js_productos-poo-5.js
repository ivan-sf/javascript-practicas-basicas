class Conteo {
    constructor(cantidad,amarillo,azul,rojo,otro){
        this.cantidad=cantidad;
        this.amarillo=amarillo;
        this.azul=azul;
        this.rojo=rojo;
        this.otro=otro;
    }

    static conteoProductos(){
        let cantidad = prompt("Cuantos productos ingresara a la maquina!");
        let cantidadAmarillo=0;
        let cantidadAzul=0;
        let cantidadRojo=0;
        let cantidadOtro=0;
        for(let i=0;i<cantidad;i++){
            let color = prompt(`Ingrese el color del producto__ 1:AMARILLO __ 2:AZUL __ 3:ROJO __ 4:OTRO`);
            if(color==1){
                cantidadAmarillo++;
            }else if(color==2){
                cantidadAzul++;
            }else if(color==3){
                cantidadRojo++;
            }else if(color>=4){
                cantidadOtro++;
            }
        }
        const newConteo = new Conteo(cantidad,cantidadAmarillo,cantidadAzul,cantidadRojo,cantidadOtro);
        document.write(newConteo.info())
    }
    info(){
        let respuesta = `
        Productos totales: <b>${this.cantidad}</b> <br> 
        Productos amarillos: <b>${this.amarillo}</b> <br>
        Productos azules: <b>${this.azul}</b> <br>
        Productos rojos: <b>${this.rojo}</b> <br>
        Productos de otro color:<b> ${this.otro}</b> <br>
        `;
        return respuesta;
    }
}

Conteo.conteoProductos();