//test section
const User = require('./../../app/models/User')

describe("Unit Test for User Class", () => {
	test('Create an User Object', () =>{
		//Here goes the code to use in the app
		const user = new User(1,"diegocantarell","Diego","Bio","dateCreated","lastUpdated")
		//Here we evaluate and validate the results of the this code
		//This is a comparison that is going to evaluate/equalize the left value with de right value (expected value)
		expect(user.id).toBe(1)
		expect(user.username).toBe("diegocantarell")
		expect(user.name).toBe("Diego")
		expect(user.bio).toBe("Bio")
		//Check if the value is not undefined in the field date
		expect(user.dateCreated).not.toBeUndefined()
		expect(user.lastUpdated).not.toBeUndefined()
	});
	/*Requirement 3*/
	test('Validate Getters', () =>{
		const user = new User(1,"diegocantarell","Diego","Bio")
		expect(user.getUsername).toBe("diegocantarell")
		expect(user.getBio).toBe("Bio")
		expect(user.getDateCreated).not.toBeUndefined()
		expect(user.getLastUpdated).not.toBeUndefined()
	});
	//Requirement 4
	test('Validate Setters',() =>{
		const user = new User(1, "diegocantarell", "Diego","Bio")

		user.setUsername = "Cantarell"
		expect(user.username).toBe("Cantarell")
		

		user.setBio = "New Bio"
		expect(user.bio).toBe("New Bio")
	}); 

})
