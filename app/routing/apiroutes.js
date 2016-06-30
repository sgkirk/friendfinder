
module.exports = function(app){

	//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
	app.get('/api/friends', function(req, res){
		res.json(possibleFriends);
	});

	//A POST routes /api/friends. This will be used to handle incoming survey results. 
	app.post('/api/friends', function(req, res){

		//This route will also be used to handle the compatibility logic.
		
		// if(tableData.length < 5 ){
		// 	tableData.push(req.body);
		// 	res.json(true); // KEY LINE
		// }

		// // Or false if they don't have a table
		// else{
		// 	waitListData.push(req.body);
		// 	res.json(false); // KEY LINE, lets the user know
		// }

	});
