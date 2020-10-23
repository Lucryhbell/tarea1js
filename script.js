let primer = prompt('Nome')
console.log(primer)
let segundo = prompt('Sobrenome')
console.log(segundo)
let tercero = prompt('Idade')
console.log(tercero)
let cuarto = prompt('Sexo')
console.log(cuarto)

alert(`Olá ${primero} como você está, já tens ${tercero}Você esta envelhecendo`) 

console.table(
    {
        Nome: primero,
        Sobrenome: segundo,
        Idade: tercero,
        Sexo: cuarto
    }
)