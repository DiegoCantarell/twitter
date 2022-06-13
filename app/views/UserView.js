//const Views  = require ('./../services/UserService')
const UserService = require('./../services/UserService')
class UserView{
	static createUser(payload){
		if(payload === null){
    		return UserService.create(1,"diegocantarell","Diego","payload no existe")
        }
        else if (payload !== null){
            let flag = 0
            for (const value in payload) {
                if(payload[value] === null)
                    //return UserService.create(1,"diegocantarell","Diego","necesitan tener un valor valido")
                    flag = 1
                    break
            }
            if(flag == 0){
                 return UserService.create(1,"diegocantarell","Diego","valor valido")

            }
            else{
                 return UserService.create(1,"diegocantarell","Diego","necesitan tener un valor valido")

            }
               // return UserService.create(1,"diegocantarell","Diego","necesitan tener un valor valido")
            
        }


	} 

}
module.exports = UserView
