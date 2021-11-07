
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

for (let i = 0; i < 1000; i++) {
    if(asalMi(i)){
        console.log(i)
    }
    
}