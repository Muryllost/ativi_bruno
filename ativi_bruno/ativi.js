
import { Pessoa } from "./pessoa.js"
let pessoas = 
[
    new Pessoa('muryldlo',10),
    new Pessoa('paulo',2),
    new Pessoa('isa',18),
    new Pessoa('kauan',20),
    new Pessoa('hanry',32),
    new Pessoa('maria',40),
    new Pessoa('pedro',16),
    new Pessoa('vinicius',17),
    new Pessoa('matheus',25),
    new Pessoa('marcia',31)

]

pessoas.map((p)=>{
    if(p.idade >= 18)
       p.acordar()
}
)


// let idades = [10,2,18,20,32,40,16,17,25,31]

// let nome = ['muryllo' ,'paulo ','isa' ,'kauan' , 'hanry' , 'maria' , 'pedro', 'vinicius' ,'matheus', 'marcia ']

// for(let contador = 0; contador < 10; contador++)
//     {
//        if(idades[contador] >= 18)
//             console.log(nome[contador])
//     }

    
    

  