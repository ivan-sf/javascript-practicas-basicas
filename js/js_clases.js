class Materia{
    constructor(nombreMateria,alumnos,profesor){
        this.nombreMateria = nombreMateria;
        this.alumnos = alumnos;
        this.profesor = profesor;
    }
    info(){
        let respuesta = `
        <b>Materia:</b> ${this.nombreMateria} <br>
        <b>Alumnos:</b> ${this.alumnos} <br>
        <b>Profesor:</b> ${this.profesor} <br><br>
        `;
        document.write(respuesta);
    }

    static cantidadClases(nombre){
        let cantidad=0;
        let totalAlumnos=alumnos.length;
        for(let i=0;i<totalAlumnos;i++){
            let totalAlumnosClase=alumnos[i].length;
            for(let i2=0;i2<totalAlumnosClase;i2++){
                if(nombre == alumnos[i][i2]){
                    cantidad++;
                }
            }
        }
        let respuesta = `
        <b>${nombre}</b> esta en <b>${cantidad}</b> clases <br>
        `;
        document.write(respuesta);
    }
    static materiasAlumno(nombre){
        let clase = "";
        let newMaterias=[];
        let totalMaterias=materias.length;
        for(let i=0;i<totalMaterias;i++){
            let totalAlumnosClase=alumnos[i].length;
            for(let i2=0;i2<totalAlumnosClase;i2++){
                if(nombre == alumnos[i][i2]){
                    newMaterias.push(materias[i]['nombreMateria']);
                }
            }
        }
        let respuesta = `
        <b>${nombre}</b> esta en clases de: <b>${newMaterias}</b> <br>
        `;
        document.write(respuesta);
    }
    
}

let alumnosFisica = ["Ismael","Estela","Alejandra","Diana","Jimmy"];
let alumnosQuimica = ["Ismael","Alejandra","Jimmy"];
let alumnosProgramacion = ["Ismael","Estela","Alejandra","Ivan"];
let alumnos = [alumnosFisica,alumnosQuimica,alumnosProgramacion];

let materiaFisica = new Materia("Fisica",alumnosFisica,"Date un vlog.");
let materiaQuimica = new Materia("Quimica",alumnosQuimica,"Aldo Batra.");
let materiaProgramacion = new Materia("Programacion",alumnosProgramacion,"Dalto");
let materias = [materiaFisica,materiaQuimica,materiaProgramacion];
let totalMaterias = materias.length;

document.write("<h1>Informacion materias</h1>");
materiaFisica.info();
materiaQuimica.info();
materiaProgramacion.info();
document.write("<h1>Cantidad de clases</h1>")
Materia.cantidadClases("Ismael");
Materia.cantidadClases("Alejandra");
Materia.cantidadClases("Estela");
Materia.cantidadClases("Jimmy");
Materia.cantidadClases("Diana");
Materia.cantidadClases("Ivan");

document.write("<h1>Clases por alumno</h1>")
Materia.materiasAlumno("Ismael");
Materia.materiasAlumno("Alejandra");
Materia.materiasAlumno("Estela");
Materia.materiasAlumno("Jimmy");
Materia.materiasAlumno("Diana");
Materia.materiasAlumno("Ivan");


// for(let i=0;i<totalMaterias;i++){
//     totalAlumnos=materias[i]['alumnos'].length;
//     alumnos=[];
//     for(let i2=0;i2<totalAlumnos;i2++){
//          alumno = alumnos[materias[i]['alumnos'][i2]];
//          console.log(alumno);
//     }
// }
