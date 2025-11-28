class pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

saudacao() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;      
}
}
const pessoa1 = new pessoa("jessica", 34);
console.log(pessoa1.saudacao());    
class aluno extends pessoa {
    constructor(nome, idade, curso,leciona) {
        super(nome, idade,leciona);
        this.curso = curso;
       
    }
}
class professor extends pessoa {
    constructor(nome, idade, leciona) {
        super(nome, idade);
        this.leciona = leciona;
    }
}
const aluno1 = new aluno("Carlos", 20, "Engenharia");
console.log(aluno1.saudacao());
console.log(`Estou matriculado no curso de ${aluno1.curso}.`);
const professor1 = new professor("joaquim", 40,"Álgebra");
console.log(professor1.saudacao());
console.log(`Eu leciono a matéria de ${professor1.leciona}.`);
