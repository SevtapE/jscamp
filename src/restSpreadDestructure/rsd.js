//rest
let showProducts=function(id,...products){
    console.log(id)
    console.log(products)
}
console.log(typeof showProducts)

showProducts(10,["Elma","Armut","Karpuz"])
//spread
let points=[1,2,55,6,7,88,233,4,5]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
// let populations=[10000,20000,30000]
// let[small,medium,high]=populations
let populations=[10000,20000,30000,[40000,50000]]
let[small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)
function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])
//redux
let {id,name}=category
console.log(id)
console.log(name)