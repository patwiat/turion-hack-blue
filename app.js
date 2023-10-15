const express = require('express');

const app = express();
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile('public\\index.html', {root: __dirname});
})


const server = app.listen(3000, () =>{
    console.log('http://localhost:3000/')
});

