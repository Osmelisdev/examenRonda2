const nombre = 'www.techacademy.com';

console.log(nombre)


function tresLetra(str) {

   return str.substring(0, 3).toUpperCase() + str.slice(3);
}

console.log(tresLetra('www.techacademy.com'));