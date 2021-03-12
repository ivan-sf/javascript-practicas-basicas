class producto{
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
let encendedor = new producto(1,"encendedor",1800,3500,19);
let celular = new producto(2,"celular",650000,1050000,19);
let cuaderno = new producto(3,"cuaderno",8500,11000,19);

encendedor.verInfo();
celular.verInfo();
cuaderno.verInfo();
