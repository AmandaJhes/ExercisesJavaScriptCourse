//DOM

//ESCOPOS
//(visibilidade de uma variável)

//(Escopo de funções)

//(No escopo de funções const, var e let se comportam de maneira parecida e só podem ser acessadas no seu escopo)
const myFunc = () => {
    let cat = 'Zeca'
    const age = 3
    var color = 'blue'
}

// console.log(color)

//(Escopo de bloco)

//(utilizando ifs por exemplo)
if (true) {
    var dragon = 'Balerion'
}

console.log(dragon)
//(var irá se comportr de maneira diferente visto que poderá ser acessado fora do escopo de bloco)

//(Escopo de léxico)
const external = () => {
    let book = 'Sapiens';

    const internal = () => {
        console.log(book.toUpperCase())
    }

    internal();
}
//(É representado quando temos o aninhamento de funções)

//(podem buscar variáveis no escopo acima)

external()