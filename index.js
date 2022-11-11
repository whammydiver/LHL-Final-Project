const axios = require("axios");
require('dotenv').config();
	
// Step 0
// console.log(process.env.APIKEY)
// const apiKey = process.env.APIKEY

(async () => {
  // Step 1
  const args = process.argv.slice(2);

  // Step 2
  if (args.length === 0) {
    console.error("Wrong arguments!");
    return;
  }

  // Step 3
  const command = args[0];

  if (command === "helloworld") {
    console.log("helloworld")
  } else if (command === "createUser") {
		// Step 1
		const [height, weight, dateOfBirth, sex, activityLevel] = args.slice(1)
		const options = {
			method: 'POST',
			url: 'https://bespoke-diet-generator.p.rapidapi.com/user',
			headers: {
				'content-type': 'application/json',
				// Step 2
				'X-RapidAPI-Key': "dfa834ba63mshcd0b7ba302b36c2p156c60jsn6d1215cf4d4d", //apiKey,
				'X-RapidAPI-Host': 'bespoke-diet-generator.p.rapidapi.com'
			},
			// Step 3
			data: JSON.stringify({
				"height": parseInt(height),
				"weight": parseInt(weight),
				"dateOfBirth": dateOfBirth,
				"sex": sex,
				"activityLevel": activityLevel
			})
		};		// Step 4
		const response = await axios.request(options).catch((error) => console.log(error.response));
		console.log("User created Successfully! User ID is:", response.data.id);
  } else if (command === "generateDiet") {
		// Step 1
		const [userId, dietType, weightGoal, dietDuration] = args.slice(1)
		const options = {
			method: 'PUT',
			// Step 2
			url: 'https://bespoke-diet-generator.p.rapidapi.com/user/'+ userId +'/diet',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': "dfa834ba63mshcd0b7ba302b36c2p156c60jsn6d1215cf4d4d", //apiKey,
				'X-RapidAPI-Host': 'bespoke-diet-generator.p.rapidapi.com'
			},
			data: JSON.stringify({
				"dietType": dietType,
				"weightGoal": weightGoal,
				"dietDuration": dietDuration
			}),
		};

		const response = await axios.request(options)
			.catch(function (error) {
				console.error(error);
			});

		// Step 3

		response.data.dailyPlan.forEach((plan, index) => {
			console.log(`Day ${index + 1}:`)
			for (const meal of plan.meals) {
				console.log(`   For meal ${meal.type} you should eat:`);
				for (const ingredient of meal.ingredients) {
					console.log(`   ${ingredient.quantity} grams of ${ingredient.name} with id ${ingredient.id}`);
				}
				console.log("");
			}
		});
	}

})()