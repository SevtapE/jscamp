import UserManager from "../business/userManager.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import UserService from "../services/userService.js"

// console.log("User component yüklendi")
// let logger1=new MongoLogger()
// // let user1=new User(1,"Ayşe","Baran","İstanbul")
// // let user2=new User(2,"Bülent","Tezcan","Kars")
// let userService=new UserService(logger1)
// // userService.add(user1)
// // userService.add(user2)
// //console.log(userService.list())
// //console.log(userService.getById(1))

// console.log("--------------")
// userService.load()
// let customerToAdd=new Customer(6,"Bülent","Tezcan","Kars",25,27819)
// customerToAdd.type="customer"
// userService.add(customerToAdd)
// userService.getCustomersSorted()
// console.log(userService.customers)
// console.log(userService.employees)
// console.log(userService.errors)


console.log("****************")
let userManager=new UserManager(new CustomerService())
let customerToAdd2=new Customer(6,"Bülent","Tezcan","Kars",25)
let customerToAdd3=new Customer(7,"Ayşe","Tezcan","Kars",35,123)
console.log(userManager.add(customerToAdd2))
console.log(userManager.add(customerToAdd3))
//console.log(userManager.getById(6))
let a =userManager.list()
console.log(a)

// let userManager2=new UserManager(new EmployeeService())
// userManager2.add()
// userManager2.list()

// let customer={id:1,firstName:"Ayşe"}
// customer.lastName="Baran"
// console.log(customer.lastName)