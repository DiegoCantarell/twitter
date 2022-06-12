//const Views  = require ('./../services/UserService')
const UserService = require('./../services/UserService')
class UserView{
	static createUser(payload){
		if(payload === null)
    		return UserService.create(1,"diegocantarell","Diego","payload no existe")		

	} 

}
module.exports = UserView
