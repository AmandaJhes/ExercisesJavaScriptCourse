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

// external()


//QUERY SELECTOR
const paragraph = document.querySelector('p')
console.log(paragraph)

const paragraphErro = document.querySelector('.error')
console.log(paragraphErro)

const divErro = document.querySelector('div.error')
console.log(divErro)

const uniqueSelector = document.querySelector('#exercise > div:nth-child(2) > p:nth-child(2)')
console.log(uniqueSelector)

//QUERY SELECTOR ALL
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs)

//(o resultado dessa seleção é um nodeList, o nodeList não é um array mas possui algumas propriedades e métodos)
console.log(paragraphs[1])

paragraphs.forEach((paragraph) => {
    console.log(paragraph)
})

//OUTRAS QUERIES

//(método do DOM para obter um elemento através do ID)
const title = document.getElementById('exercise')
console.log(title)

//(método do DOM para obter um elemento através do nome da classe)

const errors = document.getElementsByClassName('error')
console.log(errors)
//(método do DOM para obter um elemento através do nome da classe)

//Retorna um HTML Collection que não possui todos os métodos e propriedades de um nodeList e array, sendo assim melhor utilizar, a princípio, o método querySelector que retorna um nodeList. 

const paragraphsTag = document.getElementsByTagName('p')
console.log(paragraphsTag)

//EVENTS

