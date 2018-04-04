const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT||9000;

const app = express();

app.use(cors());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

//example of middleware
// function log(req, res, next) {
//     console.log('THIS IS A MIDDLEWARE');
//     next();
// }

function log(msg) {
    return(req, res, next)=>{
        console.log(msg);
        next();
    }
}

function getUser() {
    return(req, res, next) => {
        req.user = {name: 'invisible', age: 27};
        next();
    }
}

//all routes
//app.use(log);

//log only get-stuff route
   
app.get('/api/get-stuff', (req, res) =>{
    res.send({
        success: true, message: "Here is the stuff from backend"
    });
});

app.get('*', (req, res) =>{
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
})

app.post('/api/get-user', getUser(), (req, res) => {
    // res.send({
    //     success: true, user: {name: "invisible", age: 88}
    // });

    console.log('User:', req.user);
    res.send({success: true, user: req.user});
});

// app.get('/', (req, res) => {
//     res.send('<h1>This is something new....</h1>')
// });

app.listen(PORT, ()=>{
    console.log("Server running on port:" + PORT);
});

