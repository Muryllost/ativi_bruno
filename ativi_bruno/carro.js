class Carro {

    constructor(marca, modelo, quilometragem) {
        this.marca = marca
        this.modelo = modelo
        this.quilometragem = quilometragem
    }
    
    acelerar() {
        console.log(`${this.quilometragem + 1000} km a contagem de quilometragem do objeto.`);
    }
 }
 