const { default: mongoose } = require('mongoose')
const chilito = require('mongoose')
const url_bd = 'mongodb://localhost:27017/jijijija'

mongoose.connect (url_bd)
.then (() => {
    console.log ('Conexion Exitosa')
})
.catch ((err) => {
    console.log ('No sirve tu chingadera')
})

//Esqueleto de la tabla
const alumnos_esquema = new mongoose.Schema ({
    name: {
        type: String
     },
    apepat :{
        type:String
     },
    numerotel:{
        type:Number
     }
    }
)

const alumnos = new mongoose.model ('Tabla De Registros De Alumnos', alumnos_esquema)
alumnos.create (
    {
    name:'Mark',
    apepat:'Calvillo',
    numerotel:123456789

    }
)




