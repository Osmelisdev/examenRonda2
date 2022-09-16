let multiples_3=[];
let numero= 3;

function multiple(valor, multiple)
        {
            resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
        }


for(var i=1;i<=100;i++)
        {
            if(multiple(i,numero))
                multiples_3.push(i);
        }

        console.log("Los multiplos de 3 son: ",multiples_3);