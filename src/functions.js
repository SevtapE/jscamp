

function addToCart(productName="Elma",quantity) {
    console.log("Sepete eklendi:  " +productName+" adet: "+quantity)
}

// addToCart()
 addToCart(10)
// addToCart(15)

let sayHello= ()=>{
    console.log("Hello World!")
}
sayHello()

let sayHello2=function (params) {
    console.log("Hello World 2!")
}

sayHello2();

function addToCart2(productName,quantity,unitPrice) {
    
}
let product1={productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("Ürün:  "+product.productName)
    console.log("Adet:  "+product.quantity)
    console.log("Fiyat:  "+product.unitPrice)
}

addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}

product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

function addToCart4(x) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}


]

addToCart4(products)

function add(bisey,...numbers) {
    let total=0;

    for (let i = 0; i < numbers.length; i++) {
        
        total=total+numbers[i]
    }
    console.log(total)
    
}
add(20,30)
add(20,30,40)
add(20,30,40,50)
let numbers=[20,555,234,11,1]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["a","b"],
        ["c","d"],
        ["e","f"]
    ]
]
// console.log(icAnadolu)
// console.log(marmara)
// console.log(karadeniz)

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)

let product6= {productName:"Elma",unitPrice:10,quantity:5}
console.log(product6)
let newproductName,newunitPrice,newQuantity
({productName:newproductName,unitPrice:newunitPrice,quantity:newQuantity}={productName:"Elma",unitPrice:10,quantity:5})

console.log(newproductName)