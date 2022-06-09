const User = require ('./../models/User')

class UserService{
	static create(id,username,name){
		return new User(id, username, name, "Sin bio")
	}

	static  getInfo(User){
		let userInfoInList = [ User.id, User.username, User.name, "Sin bio" ]
		return userInfoInList
	}
	static updateUserUsername(User,newUsername){
		User.username = newUsername
	}

}
module.exports = UserService
