function bolenlerToplami(number) {
    let toplam=0;
    for (let i = 1; i <=number; i++) {
        if(number%i==0){
            toplam+=i;
        } 
    }
    return toplam;
    
}

function isPerfectNumber(number) {

    let isPerfect=false;
    if(number>0){
       if( bolenlerToplami(number)==(number*2))
       {
           isPerfect=true;
       }
    }
    return isPerfect;
}

console.log(isPerfectNumber(6))
console.log(isPerfectNumber(5))


for (let i = 0; i < 1000; i++) {
    if(isPerfectNumber(i)){
        console.log(i)
    }
    
}