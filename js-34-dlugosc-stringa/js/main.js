let txt1 =  "Uwielbiam JavaScript";
let txt2 = "Jestem świetnym programistą";

const main = (txt1,txt2) => {
    
    if(txt1.length < txt2.length) {
        return txt2;
    }else {
        return txt1;
    }
}
console.log(`Dluzszy napis: ${(main(txt1,txt2))}`);
