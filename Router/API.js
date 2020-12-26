const express = require('express');
const router = express.Router();
let hashset = new Set();
let prompts = require('./Prompts.js');

//GET - Gets a random prompt from prompts table
//localhost:8000/prompt sends back a random prompt from the db
//Takes 1 entry from the top in random order sends 200 if completed
//and 400 is there was an error.
router.get('/prompt', (req, res) => {
    let random = Math.floor(Math.random() * prompts.length);
    res.status(200).send(prompts[random].prompt);
})

//POST - Adds a user to the Users Table
//localhost:8000/addUser Generates a random number used to identify an username
//and then checks the if the username is already in the database. then sends back
//a status of 422 Name taken, if the user does not exist then create it and send back a status of 200
//otherwise catch the error and send it.
router.post('/addUser', async (req, res) => {
    let {Username} = req.body;
    if(hashset.has(Username)){
        res.status(422).send("Name taken");
    }
    else{
        hashset.add(Username);
        res.sendStatus(200);
    }
});


//DELETE - Deletes a user from the Users Table
//localhost:8000/deleteUser Searches the database for the username provided by 
//the front end, if the user is found then delete that username from the database and send status 200.
//if not found send 404 and 400 for errors along with the error recieved.
router.delete('/deleteUser', async (req, res) => {
    let {Username} = req.body;
    if(hashset.has(Username)){
        hashset.delete(Username);
        res.sendStatus(200);
    }
    else{
        res.sendStatus(404);
    }
});

module.exports = router;