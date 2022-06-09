const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
	//Requirement 1
	test('1. Create a new user using the UserService', () => {
		const user = UserService.create(1,"diegocantarell","Diego")
		expect(user.username).toBe("diegocantarell")
		expect(user.name).toBe("Diego")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
	})
	//Requirement 2
	        test('2. Get all user data in a list', () => {
                const user = UserService.create(1,"diegocantarell","Diego")
		const userInfoInList = UserService.getInfo(user)
                expect(userInfoInList[0]).toBe(1)
                expect(userInfoInList[1]).toBe("diegocantarell")
                expect(userInfoInList[2]).toBe("Diego")
                expect(userInfoInList[3]).toBe("Sin bio")
        })

})
