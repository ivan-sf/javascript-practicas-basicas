class Producto{
    constructor(id,nombre,preciov,precioc,iva){
        this.id = id;
        this.nombre = nombre;
        this.preciov = preciov;
        this.precioc = precioc;
        this.iva = iva;
        this.info = `El producto <b>${this.nombre}</b> tiene la posicion <b>${this.id}</b> tiene un precio de compra de <b>$${this.precioc}</b> y se lo vende en <b>$${this.preciov}</b> el producto paga un impuesto de iva total de <b>${this.iva}%</b>`
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Color extends Producto{
    constructor(id,nombre,preciov,precioc,iva,color){
        super(id,nombre,preciov,precioc,iva);
        this.color=color;
    }
    verColor(){
        alert(this.color)
    }
}

const encendedor = new Color(1,"encendedor",1800,3500,19,"Verde claro");
const celular = new Producto(2,"celular",650000,1050000,19);
const cuaderno = new Producto(3,"cuaderno",8500,11000,19);
const cuaderno2 = new Producto(3,"cuaderno",8500,11000,19);

encendedor.verColor();
encendedor.verInfo();
celular.verInfo();
cuaderno.verInfo();
