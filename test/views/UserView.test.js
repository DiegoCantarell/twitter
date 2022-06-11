const UserView = require('./../../app/views/UserView')

describe("Test for UserView ", () => {
	test('Return an error object when try to create a new user with an null payload',() => {
		const payload = null
		const result = UserView.createUser(payload)
		//https://jest.io/docs/using-matchers#strings
	expect(result.error).toMatch(/payload no existe/)
	})

})
