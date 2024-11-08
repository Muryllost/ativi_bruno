

export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    dormir() {
        console.log(`${this.nome} dormiu`)
    }
    
    acordar() {
        console.log(`${this.nome} acordou`)
    }

}
