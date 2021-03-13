class Celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.encendido=false;
        this.btnPrender=false;
        this.btnReiniciar=false;
        this.stateCamaraPhoto=false;
        this.stateCamaraVideo=false;
    }
    prender(){
        if(this.encendido==false){
            this.encendido=true;
            this.btnPrender="Funcionando";
        }else{
            this.encendido=false;
            this.btnPrender="Fuera de funcionando";
        }
    }
    reiniciar(){
        if(this.encendido==true){
            this.encendido=false;
            if(this.encendido===false){
                this.encendido=true;
                this.btnReiniciar="Funcionando"
            }else{
                this.btnReiniciar="Fuera de funcionando";
            }
            if(this.encendido==true){
            }
        }
    }
    tomarFoto(){
        this.stateCamaraPhoto="Funcionando";
    }
    grabar(){
        this.stateCamaraVideo="Funcionando";
    }
    info(){
        let respuesta = `
        Color: ${this.color} <br>
        Peso: ${this.peso} <br>
        Resolucion de pantalla: ${this.rdp} <br>
        Resolucion de camara: ${this.rdc} <br>
        Memoria Ram: ${this.ram} <br>
        Estado encendido: ${this.btnPrender} <br>  
        Estado reinicio: ${this.btnReiniciar} <br>  
        Estado camara de fotografia: ${this.stateCamaraPhoto} <br>  
        Estado camara de video: ${this.stateCamaraVideo} <br> <br> 
        `;
        return respuesta;
    }
}

class AltaGama extends Celular{
    constructor(color,peso,rdp,rdc,ram,bateria,almacenamiento){
        super(color,peso,rdp,rdc,ram);
        this.bateria=bateria;
        this.almacenamiento=almacenamiento;
    }
    infoAG(){
        let respuesta = `
        Color: ${this.color} <br>
        Peso: ${this.peso} <br>
        Resolucion de pantalla: ${this.rdp} <br>
        Resolucion de camara: ${this.rdc} <br>
        Memoria Ram: ${this.ram} <br>
        Estado encendido: ${this.btnPrender} <br>  
        Estado reinicio: ${this.btnReiniciar} <br>  
        Estado camara de fotografia: ${this.stateCamaraPhoto} <br>  
        Estado camara de video: ${this.stateCamaraVideo} <br> 
        Tipo de bateria: ${this.bateria} <br> 
        Almacenamiento: ${this.almacenamiento} <br> <br> 
        `;
        return respuesta;
    }
}

celular1 = new Celular("rojo","100gr","1980px720p","HD","2GB");
celular2 = new Celular("negro","120gr","1080px720p","Full HD","8GB");
celular3 = new Celular("blanco","190gr","1280px720p","Full HD","4GB");
celular4 = new AltaGama("rosa","98gr","1920px720p","Full HD - 4K","32GB","4800 mAh","1 TB");
celular4 = new AltaGama("oro","98gr","1920px720p","Full HD - 4K","32GB","4800 mAh","1 TB");

celular1.prender();
celular1.reiniciar();
celular1.tomarFoto();
celular1.grabar();

celular2.prender();
celular2.reiniciar();
celular2.tomarFoto();
celular2.grabar();

celular3.prender();
celular3.reiniciar();
celular3.tomarFoto();
celular3.grabar();

document.write(`
${celular1.info()} <br>
${celular2.info()} <br>
${celular3.info()} <br>
${celular4.infoAG()} <br>
`)