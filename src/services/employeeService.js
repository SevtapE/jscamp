
import DataErrorResult from "../models/dataErrorResult.js"
import UserServiceBase from "./userServiceBase.js"

export default class EmployeeService extends UserServiceBase{
    constructor(){
        super() 
        this.employees = []
    }

    load(){}
    add(user){
        // if(check){
        //     return new DataErrorResult("Validation Error",check)
        // }
        this.employees.push(user)
    }
    list(){
      
        return this.employees
    }
    getById(id){
        return this.employees.find(u=>u.id===id)
    }
    sort(){
        return          this.employees.sort((employee1,employee2)=>{
            if(employee1.firstName>employee2.firstName){
                return 1;
            }else if(employee1.firstName===employee2.firstName){
                return 0;
            }else
            return -1

        })
    }
    
}