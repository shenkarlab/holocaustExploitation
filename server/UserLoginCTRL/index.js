//DB schema:
var users = require('../users_schema'),  
    user = require('../user_schema');      

//MDL function:

exports.loginAuth = function (req,res){
    var username = req.body.username,
        password = req.body.password;
    users.findOne({username: username, password:password}, function(err, user){
        if (err){
            console.log(err);
            return res.status(500).send();
        }
        if (!user){ 
            console.log('user not found');
            return res.status(404).send();
        }
        console.log('user: ' + username + ' found! ' );
        return res.redirect('/user/cal4today/'+username+'/04/06/2016');
    })  
}


exports.register = (req, res) => {

    var username = req.body.username,
        password = req.body.password,
        firstName = req.body.firstName,
        lastName = req.body.lastName,
        fullName = firstName + " " + lastName;
        // age = req.body.age,
        // weight = req.body.weight,
        // height = req.body.height,
        // BMIScore = req.body.BMIScore,
        // gender = req.body.gender;
    var status;
    users.findOne({username: username}, (err, data) => {
        //if (err) return res.status(500).send(err);
        //if (data) return res.status(400).json({status: "user already exists"});
        //else{
            var newUser = new users({
                username: username,
                password: password
            });
            newUser.save((err, doc) => {
                //if(err) return res.status(500).send(err);
            });
        //}
    });
    user.findOne({username: username}, (err, data) => {
        //if(err) return res.status(500).send(err);
        if(!data){
            var newUser = new user({
                username: username,
                fullName: fullName,
                age: 0,
                trainingRoutine: [],
                BMI: {},
                dailyGraph: []
            });
            newUser.save((err, doc) => {
                //if(err) return res.status(500).send(err);
            });
        }
    });
    res.status(200).json({"status": "user inserted"});
};