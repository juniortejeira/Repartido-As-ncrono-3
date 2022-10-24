const express = require("express")
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile((__dirname + '/public/index.html'))
})

//Rutas web
app.use('/api', require('./router/user.js'));
app.use('/mascotas',require('./router/posts'))






/* 
app.use((req,res,netx)=>{
    res.status(404).render("404",{
        titulo:"404",
        descripcion: "Titulo del sitio web"
    })
}) */

app.listen(3000, () =>{
    console.log("server running on port")
})