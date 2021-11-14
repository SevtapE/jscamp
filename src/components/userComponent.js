import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")
let logger1=new MongoLogger()
let user1=new User(1,"Ayşe","Baran","İstanbul")
let user2=new User(2,"Bülent","Tezcan","Kars")
let userService=new UserService(logger1)
userService.add(user1)
userService.add(user2)
//console.log(userService.list())
console.log(userService.getById(1))


// let customer={id:1,firstName:"Ayşe"}
// customer.lastName="Baran"
// console.log(customer.lastName)