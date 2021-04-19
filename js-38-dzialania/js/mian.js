const main = (number1,number2) => {

    let suma = number1 + number2;
    let roznica = number1 - number2;
    let iloczyn = number1 * number2;

    if(suma > 0) {
        console.log(`Wynik dodawania wynosi ${suma}`);
    }else {
        console.log('Wynik jest nieprawidlowy');
    }

    if(roznica > 0) {
        console.log(`Wynik odejmowania wynosi ${roznica}`);
    }else {
        console.log('Wynik jest nieprawidlowy');
    }
    
    if(iloczyn > 0) { 
        console.log(`Wynik mnozenia wynosi ${iloczyn}`);  
    
    }else {
        console.log('Wynik jest nieprawidlowy');
    }
}
main(12,22);





      


     