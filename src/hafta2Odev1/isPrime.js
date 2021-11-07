
let asalMi=function(number) {
    let isPrime=true;
    if(number==0 || number==1){
        isPrime=false;
    }else if(number!=2)
    {
        for (let i = 2; i < number; i++) {
            if(number%i==0){
                //asal değil çık
                isPrime=false;
                break; 
            } 
        }
    }
    return isPrime;
}


//console.log(asalMi(5))

function findPrime(...numbers){

    for (let i = 0; i < numbers.length; i++) {
       console.log(" Number: "+numbers[i]+ " IsPrime: " +asalMi(numbers[i])) ;
        
    }
}

findPrime()
findPrime(2,3,5)
findPrime(0,1,8,19,221,37)