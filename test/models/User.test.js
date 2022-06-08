//test section
const User = require('./../../app/models/User')

describe("Unit Test for User Class", () => {
	test('Create an User Object', () =>{
		//Here goes the code to use in the app
		const user = new User(1,"diegocantarell","Diego","Bio","dateCreated","lastUpdated")
		//Here we evaluate and validate the results of the this code
		//This is a comparison that is going to evaluate/equalize the left value with de right value (expected value)
		expect(user.id).toBe(1)
		expect(user.userName).toBe("diegocantarell")
		expect(user.name).toBe("Diego")
		expect(user.bio).toBe("Bio")
		expect(user.dateCreated).toBe("dateCreated")
		expect(user.lastUpdated).toBe("lastUpdated")
	});
})
