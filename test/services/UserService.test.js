const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
	//Requirement 1
	test('1. Create a new user using the UserService', () => {
		const user = UserService.create(1,"diegocantarell","Diego", "payload no existe ")
		expect(user.username).toBe("diegocantarell")
		expect(user.name).toBe("Diego")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
		expect(user.error).toMatch(/payload no existe/)

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
	//Requirement 3
	test('3. Update username', () => {
                const user = UserService.create(1,"diegocantarell","Diego")
		UserService.updateUserUsername(user,"DiegoC")
		expect(user.username).toBe("DiegoC")
        })
	//Requirement 4
        test('4. Given a list of users give me the list of usernames', () => {
                const user1 = UserService.create(1,"diegocantarell1","Diego1")
		const user2 = UserService.create(1,"diegocantarell2","Diego2")
		const user3 = UserService.create(1,"diegocantarell3","Diego3")
		
		const usernames = UserService.getAllUsernames([user1,user2,user3])
		expect(usernames).toContain("diegocantarell1")
		expect(usernames).toContain("diegocantarell2")
		expect(usernames).toContain("diegocantarell3")

        })
	


})
