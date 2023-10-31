const express = require('express')
const path = require('path');
const app = express()
const port = 3000;


app.get('/', (req, res) =>{
    res.send("Conociendo NodeJS")
})


app.use('/public', express.static(path.join(__dirname, 'public')))

// app.get("/index.html", function (req, res) {
//     var filePath = path.join(__dirname, "../public/index.html");
//     res.sendFile(filePath);
// });

app.listen(port, () => {
    console.log(`Se esta ejecutando sobre el puerto ${port} revise cambios en http://localhost:3000/public/`)
})

