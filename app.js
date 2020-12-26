const express = require('express');
const app = express();
const cors = require('cors');

const Router = require('./Router/API.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(Router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
});