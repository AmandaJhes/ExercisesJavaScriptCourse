//Criando um objeto literal
console.log("------------------\n")

let user = {
    name: "Amanda",
    age: 23,
    email: "amandajhes22@gmail.com",
    city: "Fortaleza",
    blogPosts: ["Object Works", "FullStack Developer"]
}

console.log(typeof (user))

console.log(user);
console.log(user.name);
console.log(user.blogPosts[1])
user.name += " Jéssica"
console.log(user.name);
console.log(user['age']);

