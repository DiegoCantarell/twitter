const User = require ('./../models/User')

class UserService{
	static create(id,username,name, error){
		return new User(id, username, name, error, "Sin bio")
	}

	static  getInfo(User){
		let userInfoInList = [ User.id, User.username, User.name, "Sin bio" ]
		return userInfoInList
	}
	static updateUserUsername(User,newUsername){
		User.username = newUsername
	}
	static getAllUsernames([User1,User2,User3]){
		let usernames = [User1.username,User2.username,User3.username]
		return usernames
	}

}
module.exports = UserService
