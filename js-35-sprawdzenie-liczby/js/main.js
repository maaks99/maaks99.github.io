const main = n => {
    let number = n;

    if(number <= 99){
        console.log(`Liczba nie znajduje sie w przedziale`);
    }else if ((number >=100),(number <= 200)) {
        console.log(`Liczba znajduje sie w przedziale`);
    }else{
        console.log(`Liczba nie znajduje sie w przedziale`);
    }
}
main(127);