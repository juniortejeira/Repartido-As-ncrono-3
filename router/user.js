const express = require('express');
const router = express.Router();

var users = [];
var crearUsario = [
    {
        "id":"12",
        "content":"frase o plabra",
        "date":"2019-05-30T17:10:21.098Z",
    }
];

//



router.post("/signup",(req,res)=>{
    //
   let datos = req.body;
   
       console.log("correcto")
           
           users.push(datos)
           console.log(datos)
           res.end();
           
        })

 router.post('/login',(req,res)=>{
    let constraseña = req.body.constraseña;//accedemos a la propiedad constraseña
    let usario = req.body.usario;
    
    let usarioExistente = users.find(e => e.usario == usario)//buscame usario y comparalo, si son iguales devolveme el onjeto
    console.log(usarioExistente)
    res.end("usario iniciado correctamente");

 })

 router.post('/create', (req,res)=>{
    let crearUsario = req.body;
   
    console.log("correcto")
        
        users.push(crearUsario)
        console.log(crearUsario)
        res.end("creado correctamente");
 })


        
 router.get('/',(req,res)=>{
     res.json(users)//tranformalo a json y enviaselo al cliente(res, esta enviando atraves de http)
     
     
     //no puedes comparar 2 array
     /* 
     let usuariosOk = req.body; 
    if(users === usuariosOk){
        console.log("es correcto")
    }else{
        console.log("nuevo usario")
    }
 */
    
})

module.exports = router; //esto es para exportarlo a app.js(haremos una peticion luego)