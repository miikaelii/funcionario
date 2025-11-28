class Funcionario {
    constructor(nome, salario ) {
        this.nome = nome;
        this.salario = salario;
    }      
    descricao() {
        return `Funcionario:${this.nome} salário :  ${this.salario} .`;
    }
}
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome,salario);
        this.departamento = departamento;
    }

    descricaoGerente() {
        return `gerente:${this.nome} pertence ao departamento:  ${this.departamento} salario: ${this.salario}.`;
    }  
}
const Funcionario1=new Funcionario("jessica", 3400);  
const gerente1=new Gerente("Carlos", 5000, "Vendas");
console.log(Funcionario1.descricao());
console.log(gerente1.descricaoGerente());
