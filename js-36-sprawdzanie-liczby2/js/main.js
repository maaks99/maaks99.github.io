const main = (number,number2) => {

    if((number === 20 )||(number2 === 20)){
        return true;
        
    }else if (number + number2 <= 20) {
        return true;
        
    }else {
        return false;
        
    }
}
console.log(main(1,20));