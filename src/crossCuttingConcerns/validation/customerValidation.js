import DataErrorResult from "../../models/dataErrorResult.js";



export default class CustomerValidation {

    constructor(user){
      //  super()
      this.user=user
        this.errors=[]
        this.checkIfAgeIsANumber(user)
        this.checkIfRequiredFielsExist(user)
        this.Validate()
    }

    Validate(){
    
         return this.errors
    
     
     
    }
    checkIfRequiredFielsExist(user) {
        let requiredFields = "id firstName lastName city age".split(" ")
       

        for (const field of requiredFields) {
            if (!user[field]) {
              this.errors.push((new DataErrorResult(`Validation error ${field} is required`, user)))
             
            }


        }
        
       
    }

   checkIfAgeIsANumber(user) {
    if (Number.isNaN(Number.parseInt(user.age))) {
      this.errors.push(  new DataErrorResult(`Validation error ${user.age} is not a number`, user))
       
    }
  
    }
  
}