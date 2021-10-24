class Customer{
    constructor(id,customerNumber){
        // this.degısken=id
        this.id=id
        this.customerNumber=customerNumber

    }
}
let customer = new Customer(1,"12345");
console.log(customer.id+"thisli")
//prototyping
customer.name="Ali Veli"
console.log(customer.name)
console.log(customer)
Customer.bisey="Bişey"
console.log(Customer.bisey)
console.log(customer.bisey)
console.log(customer.id)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName;
    }
}