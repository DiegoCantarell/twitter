class User{
	constructor(id,username,name,error,bio,dateCreated,lastUpdated){
		this.id = id
		this.username = username
		this.name = name
		this.bio = bio
		this.dateCreated = new Date()
		this.lastUpdated = new Date()
		this.error = error
	}
	get getUsername(){
		return this.username
	}
	get getBio(){
		return this.bio
	}
	get getDateCreated(){
		return this.dateCreated
	}
	get getLastUpdated(){
		return this.lastUpdated
	}
	get getError(){
                return this.error
        }

	set setUsername(newUsername){
		this.username = newUsername
	}
	set setBio(newBio){
		this.bio = newBio
	}
}
module.exports = User
