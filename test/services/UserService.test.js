const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
	test('1. Create a new user using the UserService', () => {
		const user = UserService.create(1,"diegocantarell","Diego")
		expect(user.username).toBe("diegocantarell")
		expect(user.name).toBe("Diego")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
	})
})
