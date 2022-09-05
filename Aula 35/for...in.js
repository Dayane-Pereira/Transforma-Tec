//Estrutura for...in - Pega a/as propriedade's dentro do bloco


let carro = {
        marca:'Hyundai',
        modelo: 'Veloster',
        cor:'preto',
}

//     lendo apenas a propriedade 

for (propriedade in carro) {
console.log (propriedade);
}


//     lendo a string com a propriedade

for (propriedade in carro) {
console.log ("propriedade do usuário: " + carro[propriedade] ); 
}



//    lendo a propriedade e o valor dentro do objeto

for (propriedade in carro) {
    console.log(propriedade + " : " + carro[propriedade]);
}