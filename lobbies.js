const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
	res.send("Lobby table");
)}

router.get('/startGame/:lobbycode',(req,res) => {
	var id = req.params.id;
})


router.post('/createLobby/:guest/:lobbycode',(req,res) => {
	var lobby = {
		
		"lobby":{

			"host": req.params.host,
			"id": req.params.id
		
		}
		
	};
})

router.put('/joinLobby/:guest/:lobbycode',(req,res) => {
	
})

router.put('/leaveLobby/:guest/:lobbycode',(req,res) => {
	
})

router.put('/kickUser/:guest/:lobbycode',(req,res) => {
	var user = req.params.user;
	var id = req.params.id;
})

router.delete('/removeLobby/:lobbycode',(req,res) => {
	var id = req.params.id;
})

module.exports = router;