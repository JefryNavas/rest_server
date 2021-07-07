require("./server/config")
const mongoose = require('mongoose');
const express = require("express");

const app = express();

//Midlewars
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require("./server/routes/usuario"));



mongoose.connect('mongodb://localhost:27017/Cafe', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;
    console.log("Base de datos online!");
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto 3000");
})