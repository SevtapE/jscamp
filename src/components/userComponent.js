import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")
let logger1=new MongoLogger()
// let user1=new User(1,"Ayşe","Baran","İstanbul")
// let user2=new User(2,"Bülent","Tezcan","Kars")
let userService=new UserService(logger1)
// userService.add(user1)
// userService.add(user2)
//console.log(userService.list())
//console.log(userService.getById(1))

console.log("--------------")
userService.load()
let customerToAdd=new Customer(6,"Bülent","Tezcan","Kars",25,27819)
customerToAdd.type="customer"
userService.add(customerToAdd)
userService.getCustomersSorted()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
// let customer={id:1,firstName:"Ayşe"}
// customer.lastName="Baran"
// console.log(customer.lastName)