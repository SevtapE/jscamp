

function bolenlerToplami(number) {
    let toplam=0;
    for (let i = 1; i < number; i++) {
        if(number%i==0){
            toplam+=i;
        } 
    }
    return toplam;
    
}

//console.log(bolenlerToplami(220))

function isFriendlyNumbers(number1,number2) {

    if((bolenlerToplami(number1)==number2) && (bolenlerToplami(number2)==number1)){
        return true;
    }
    return false;
    
}

console.log(isFriendlyNumbers(220,284))