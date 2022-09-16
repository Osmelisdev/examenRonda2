function generarnumero(min, max){
    
    for (var i = 0; i < 5; i++) {
        let numero= Math.floor(Math.random() * (max - min + 1) ) + min;

        if(numero%2==0){
            console.log("El número "+numero+" es par");
        }else{
            console.log("El número "+numero+" es impar");
        }
     }
}

generarnumero(1,100);
