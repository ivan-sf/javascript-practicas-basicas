class App{
    constructor(nombre,descargas,puntuacion,peso){
        this.nombre=nombre;
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.stateInstall=false;
        this.stateOpen=false;
        this.stateClose=false;
        this.stateUninstall=false;
    }
    instalar(){
        if(this.stateInstall==false){
            this.stateInstall="Funcionando correctamente";
        }
    }
    abrir(){
        if(this.stateOpen==false){
            this.stateOpen="Funcionando correctamente";
        }
    }
    cerrar(){ if(this.stateClose==false){
        this.stateClose="Funcionando correctamente";
    }
    }
    desinstalar(){
        if(this.stateUninstall==false){
            this.stateUninstall="Funcionando correctamente";
        }
    }
    info(){
        let respuesta=`
        La aplicacion ${this.nombre} tiene un total de ${this.descargas} descargas su puntuacion es de ${this.puntuacion} y tiene un peso de almacenamiento total de ${this.peso} <br>
        Estado del instalador: ${this.stateInstall} <br>
        Estado del lanzador de la app: ${this.stateOpen} <br>
        Estado del del cerrador de la app: ${this.stateClose} <br>
        Estado del desinstalador: ${this.stateUninstall} <br><br>
        `;
        return respuesta;
    }
}

app1 = new App("Chrome","1.000.000.000","4.7","36.8 MB");
app2 = new App("Photoshop","1.000.000","4.6","27.9 MB");
app3 = new App("Visual Studio Code","1.800.000","4.9","368.82 MB");
app4 = new App("Facebook","1.020.000","4.3","63.8 MB");
app5 = new App("Messenger","1.652.564","4.1","25.9 MB");
app6 = new App("Telegram","1.000.223","4.9","63.8 MB");
app7 = new App("Pinterest","998.456","5.0","58.63 MB");

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

app2.instalar();
app2.abrir();
app2.cerrar();
app2.desinstalar();

app3.instalar();
app3.abrir();
app3.cerrar();
app3.desinstalar();

app4.instalar();
app4.abrir();
app4.cerrar();
app4.desinstalar();

app5.instalar();
app5.abrir();
app5.cerrar();
app5.desinstalar();

app7.instalar();
app7.abrir();
app7.cerrar();
app7.desinstalar();


document.write(`
    ${app1.info()}
    ${app2.info()}
    ${app3.info()}
    ${app4.info()}
    ${app5.info()}
    ${app6.info()}
    ${app7.info()}
`);