const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT||9000;

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res) =>{
    res.send({
        success: true, message: "Here is the stuff from backend"
    });
})

app.get('/', (req, res) => {
    res.send('<h1>This is something new....</h1>')
});

app.listen(PORT, ()=>{
    console.log("Server running on port:" + PORT);
});

