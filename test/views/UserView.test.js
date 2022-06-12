const UserView = require('./../../app/views/UserView')

describe("Test for UserView ", () => {
	test('1.Return an error object when try to create a new user with an null payload',() => {
		const payload = null
		const result = UserView.createUser(payload)
		//https://jest.io/docs/using-matchers#strings
	expect(result.error).toMatch(/payload no existe/)
	})
    test('2.Return an error object when try to create a new user with a payload width invalid properties',() => {
        const payload = {username: null, name:12, id: "id" }         
        const result = UserView.createUser(payload)
        //https://jest.io/docs/using-matchers#strings
        expect(result.error).toMatch("necesitan tener un valor valido")
     })        
})
