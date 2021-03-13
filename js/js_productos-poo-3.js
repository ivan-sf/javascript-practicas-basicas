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
        this.color=null;
    }
    
    static alertaEstatic(){
        alert("Static se puede usar cuando no se van a pasar parametros y se lo puede instanciar directamente desde la clase como en este caso.");
    }

    set setColor (nuevoColor){
        this.color = nuevoColor;
        alert("Para setear o cambiar un valor se debe usar get como en este caso se cambio al color "+this.color);
    }
    get getColor (){
        return this.color;
    }
}

const encendedor = new Color(1,"encendedor",1800,3500,19);
const celular = new Producto(2,"celular",650000,1050000,19);
const cuaderno = new Producto(3,"cuaderno",8500,11000,19);
const cuaderno2 = new Producto(3,"cuaderno",8500,11000,19);

encendedor.verInfo();
celular.verInfo();
cuaderno.verInfo();
Color.alertaEstatic();
encendedor.setColor = "Verde brillante";
document.write("Nuevo color:"+encendedor.color+"<br>");
encendedor.setColor = "Verde claro";
document.write("Nuevo color:"+encendedor.color+"<br>");
document.write("La forma correcta de ver un dato es mediante get como en el siguiente ejemplo "+encendedor.getColor+"<br>");
