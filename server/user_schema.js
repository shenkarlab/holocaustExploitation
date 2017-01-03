var mongoose = require('mongoose'),
	schema = mongoose.Schema,
	userDataSchema,
	trainingRoutine,
	BMI,
	dailyGraph,
	userData;

trainingRoutine = new schema({
	exType: String,
	dayOfWeek: String,
	hour: String,
	duration: Number,
	burntCalories: Number
});

BMI = new schema({
	gender: String,
	weight: Number,
	height: Number,
	BMIScore: Number
});

dailyGraph = new schema({
	date: String,
	time: String,
	calories: Number
});

userData = new schema({
	username: String,
	fullName: String,
	age: Number,
	trainingRoutine: [trainingRoutine],
	BMI: BMI,
	dailyGraph: [dailyGraph]
}, {collection: 'userData'});

userDataSchema = mongoose.model('userDataSchema', userData);

module.exports = userDataSchema;
