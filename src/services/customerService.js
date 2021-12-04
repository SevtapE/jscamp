
import CustomerValidation from "../crossCuttingConcerns/validation/customerValidation.js"
import Validation from "../crossCuttingConcerns/validation/validation.js"

import DataErrorResult from "../models/dataErrorResult.js"
import DataSuccessResult from "../models/dataSuccessResult.js"
import UserServiceBase from "./userServiceBase.js"

export default class CustomerService extends UserServiceBase{
    constructor(){
       super()
        this.customers = []
       
    }

    load(){}
    add(user){
      
       let result=new CustomerValidation(user)
       if(result.errors.length>0)
       {
           //console.log(result.errors)
           return result.errors
    }
         return new DataSuccessResult("It's OK" ,this.customers.push(user))}
     
    
    
    list(){
        
      return this.customers
        
    }
    getById(id){
        return this.customers.find(u=>u.id===id)
    }
    sort(){
        return          this.customers.sort((customer1,customer2)=>{
                if(customer1.firstName>customer2.firstName){
                    return 1;
                }else if(customer1.firstName===customer2.firstName){
                    return 0;
                }else
                return -1
    
            })
    }



    

}