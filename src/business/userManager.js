export default class UserManager{
    constructor(userService){
        this.userService=userService
        

    }
    load(){}
    add(user){
        return this.userService.add(user)
    }
    list(){
        return this.userService.list()
    }
    getById(id){
        return this.userService.getById(id)
    }
 
    sort(){
       
        return this.userService.sort()
    }
}