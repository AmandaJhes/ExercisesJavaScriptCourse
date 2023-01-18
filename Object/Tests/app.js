// FOREACH VS MAP
// (A diferença entre os métodos de array forEach e map)
const names = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];

console.log('Exemplo FOR:')
for (let i = 0; i < names.length; i = i + 1) {
    console.log(names[i], i);
}

// Utiizar o forEach se torna mais simples pois não precisamos fazer o gerenciamento de incremento.
console.log('\nExemplo FOREACH:')
names.forEach((item, indice) => {
    console.log(item, indice);
})

// Como reproduzir o for em uma função
function nossoForEach(arr, funcao) {
    for (let i = 0; i < arr.length; i++) {
        const itemDoArray = arr[i]
        funcao(itemDoArray, i)
    }
}

//Testando a função criada
console.log('\nReproduzindo método forEach')
nossoForEach(names, function (nome, i) {
    console.log(nome, i)
})

// A diferença entre o forEach e Map está no retorno deles
console.log('\nExemplo MAP:')
names.map((item, i) => {
    console.log(item, i);
})

// Exemplo:

console.log('')
const retornoDoMap = names.map((item, i) => {
    console.log(item, i);
});

const retornoDoForEach = names.forEach((item, indice) => {
    console.log(item, indice);
})