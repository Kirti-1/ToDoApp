const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const path = require('path')




app.set('views','Views')
app.set('view engine', 'ejs');

const router = require('./Routes')
app.use(express.static(path.join(__dirname, 'Static')))
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);
app.use('/user',require('./Routes/users'))
app.use(express.json())


app.listen(port, function(err){
    if(err){
        console.log(`Error on port ${port}`);
        return;
    }
    console.log(`Successfully connected to port ${port}!!!`);
})
