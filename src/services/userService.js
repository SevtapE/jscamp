import { users } from "../data/users.js"
import DataError from "../models/dataError.js"


export default class UserService {
    constructor(loggerService) {

        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    load() {


        for (const user of users) {
            console.log(user)
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }

                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {

                        this.employees.push(user)
                    }

                    break;

                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }

    }
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false

        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true

                this.errors.push(new DataError(`Validation error ${field} is required`, user))
            }


        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            this.errors.push(new DataError(`Validation error ${user.age} is not a number`, user))
            hasErrors = true
        }
        return hasErrors
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false

        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true

                this.errors.push(new DataError(`Validation error ${field} is required`, user))
            }


        } if (Number.isNaN(Number.parseInt(user.age))) {
            this.errors.push(new DataError(`Validation error ${user.age} is not a number`, user))
            hasErrors = true
        }
        return hasErrors
    }
    add(user) {
        switch (user.type) {

            case "customer":
                if (!this.checkCustomerValidityForErrors(user)){
                this.customers.push(user)
            }
                break
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {

                this.employees.push(user)
                }
                break
            default:
                this.errors.push(new DataError("This user can not be added.Wrong user type", user))
                break;
        }

        this.loggerService.log(user)

    }
    listCustomers() {
        return this.customers

    }
    listEmployees() {
        return this.employees

    }
    getCustomersById(id) {
         return this.customers.find(u=>u.id===id)
        //console.log("Kullanıcı getirildi")
    }
    getEmployeesById(id) {
        return this.employees.find(u=>u.id===id)
   }
   getCustomersSorted(){
      return this.customers.sort((customer1,customer2)=>{
           if(customer1.firstName>customer2.firstName){
               return 1;
           }else if(customer1.firstName===customer2.firstName){
               return 0;
           }else
           return -1

       })
   }
}