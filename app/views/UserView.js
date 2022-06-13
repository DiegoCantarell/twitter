//const Views  = require ('./../services/UserService')
const UserService = require('./../services/UserService')
class UserView{
	static createUser(payload){
		if(payload === null){
    		return UserService.create(1,"diegocantarell","Diego","payload no existe")
        }
        else if (payload !== null){
            let flag = 0, count = 0
            for (const value in payload) {
                count ++

            }
            for (const value in payload) {
                if(payload[value] === null)
                    //return UserService.create(1,"diegocantarell","Diego","necesitan tener un valor valido")
                    flag = 1
                    break
            }
            if(flag == 0 && count === 3){
                 return UserService.create(payload.id,payload.username,payload.name,"valor valido")

            }
            else if (flag == 1 || count < 3) { 
                 return UserService.create(0,"noUsername","noName","necesitan tener un valor valido")

            }
               // return UserService.create(1,"diegocantarell","Diego","necesitan tener un valor valido")
            
        }


	} 

}
module.exports = UserView
