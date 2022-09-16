let cadena = "hola como estas"

let indices = [];
for(let i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "o") indices.push(i);
}
console.log('se repite la letra "o" ' + indices.length + ' veces' )