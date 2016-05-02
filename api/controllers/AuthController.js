module.exports = {
	createAccount: function (req,res) {
		login.create({
			username : req.param("username"),
			email : req.param("email"),
			password : req.param("password"),
			firstName : req.param("firstName"),
			lastName : req.param("lastName"),
			phoneNumber : req.param("phoneNumber"),
			companyName : req.param("companyName"),
			address : req.param("address"),
			postalCode : req.param("postalCode"),
			cvrNumber : req.param("cvrNumber")
		}).exec(function(err, data){
			if (err) res.json(err); else res.json(data);
		})
	},

	getAccounts: function(req, res){
		login.find().exec(function(err, data){
			res.json(data);
		})
	},
}