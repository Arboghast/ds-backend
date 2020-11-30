const express = require('express');
const router = express.Router();

//POST - Adds a user to the Users Table
router.post('/addUser', (req,res) => {
    //{id: ip&mac-based hash}
});


//DELETE - Deletes a user from the Users Table
router.delete('/deleteUser',(req,res) => {
	
});

//POST - Adds a writing prompt to the Prompt Table 
router.post('/addPrompt', (req,res) => {

});

//DELETE - Deletes a writing prompt from the Prompt Table
router.delete('/deletePrompt', (req,res) => {

});

//GET - Returns a list of results sorted by category and time period
router.get('/scoreboard', (req,res) => {
    req.query.filterMethod; //contains the value of the users' chosen sortingMethod
    req.query.timePeriod;  //contains the value of the users' chosen timeperiod
});

module.exports = router;