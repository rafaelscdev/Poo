function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.exibirInfo = function() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    };
}

function Carro(marca, modelo, ano, portas) {
    Veiculo.call(this, marca, modelo, ano);
    this.portas = portas;
}

function Moto(marca, modelo, ano, cilindradas) {
    Veiculo.call(this, marca, modelo, ano);
    this.cilindradas = cilindradas;
}

const carro1 = new Carro("Toyota", "Corolla", 2022, 4);
const moto1 = new Moto("Yamaha", "MT-07", 2023, "689cc");

console.log(carro1.exibirInfo());
console.log(moto1.exibirInfo());
