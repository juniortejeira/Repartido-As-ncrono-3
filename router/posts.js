const express = require('express');
const routers = express.Router();


routers.get('/',(req,res)=>{
    res.render("mascotas", {
       //base de datos(para get, post,delete)
        arrayMascotras:[
            {id:'1',nombre:'perro',descripcion: 'la descripcion'},
            {id:'2',nombre:'gato',descripcion: '2 la descripcion'}
        ]
    })
})

module.exports = routers;