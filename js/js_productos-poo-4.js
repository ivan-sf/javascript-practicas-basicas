class Producto{
    constructor(nombre,pv,pc){
        this.nombre=nombre;
        this.pv=pv;
        this.pc=pc;
    }
    
    static registroProductos(){
        let cantidad=prompt("Cuantos productos desea registrar?");
        let producto="";
        let productos=[];
        let i=0;
        for(i=0;i<cantidad;i++){
            productos[i]=prompt("Ingrese el nombre del producto numero "+(i+1));
        }
        for(producto in productos){
            let precioC = prompt(`Ingrese el precio de compra del producto ${productos[producto]}`);
            let precioV = prompt(`Ingrese el precio de venta del producto ${productos[producto]}`);
            // let respuesta=`
            // El producto ${productos[producto]} tiene un valor de compra de ${precioC} y un valor de venta de ${precioV} <br><br>
            // `;
            // document.write(respuesta);
            let newProducto = new Producto(productos[producto],precioC,precioV);
            document.write(newProducto.info())
            
        }
    }

    info(){
        let respuesta=`
        Producto ${this.nombre} tiene un costo de ${this.pc} y un valor de venta de ${this.pv} <br>
        `;
        if(this.pv<10000){
            respuesta+=`<b style="color:red">El producto esta en promocion</b> <br><br>`
        }else{
            respuesta+=`<br><br>`
        }
        return respuesta;
    }
}

Producto.registroProductos();