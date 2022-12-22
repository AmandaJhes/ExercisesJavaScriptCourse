//OBJECT

//CRIANDO UM OBJETO LITERAL 
console.log("------------------\n")

let user = {
    name: "Amanda",
    age: 23,
    email: "amandajhes22@gmail.com",
    city: "Fortaleza",
    blogPosts: ["Object Works", "FullStack Developer"],
    login: function () {
        console.log("usuário logado");
    },
    logout: function () {
        console.log("Usuário deslogado");
    }
}

console.log(typeof (user))
console.log(user);

//Notação de ponto
console.log(user.name);
console.log(user.blogPosts[1])
user.name += " Jéssica"
console.log(user.name);

//Notação de colchete
console.log(user['age']);

//Utilização da notação de colchete
const key = 'email'
console.log(user[key]);

//BRACKETS IN JAVASCRIPT
console.log("----------------------\n")

let myArray = ["A", "B", "C", "D"];
console.log(`Array: ${myArray}\n1º poição do Array: ${myArray[0]}`);
let myObject = {
    one: "A",
    two: "B",
    tree: "C",
    four: "D"
};
console.log(`Object: ${myObject}\n1º posição do Object: ${myObject.one}`);

//OBJECT METHODS
console.log("----------------------\n")

user.login()
user.logout()
