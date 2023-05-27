// Classe para representar uma moto
class Moto
{
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  acelerar() {
    this.position += Math.floor(Math.random() * 2) + 1;
  }
}

// Classe para representar a corrida
class Corrida {
  constructor(tamanhoCorrida) {
    this.tamanhoCorrida = tamanhoCorrida;
    this.motos = [
      new Moto("CB500F", 0),
      new Moto("Hornet", 0),
      new Moto("MT 03", 0),
      new Moto("Z400", 0)
    ];
  }

  iniciar() {
    while (true) {
      console.log("Olá! Bem-vindo ao autódromo de Tarumã. Você está pronto para a corrida?");
      const resposta = prompt("Deseja iniciar a corrida? (S/N)\n");

      if (resposta.toLowerCase() === "s") {
        console.log("A corrida começou!");
        this.loopCorrida();
      } else {
        console.log("Estaremos à disposição quando quiser iniciar a corrida.");
        break;
      }
    }
  }

  loopCorrida() {
    while (true) {
      this.desenharPista();
      this.escolherMoto();

      if (this.verificarVencedor()) {
        if (this.reiniciarCorrida()) {
          console.log("Próxima corrida iniciada!");
        } else {
          console.log("Corridas finalizadas. Obrigado por jogar!");
          break;
        }
      }
    }
  }

  desenharPista() {
    console.log("-".repeat(this.tamanhoCorrida));

    this.motos.forEach((moto) => {
      console.log(" ".repeat(moto.position) + moto.name);
    });

    console.log("-".repeat(this.tamanhoCorrida));
  }

  escolherMoto() {
    while (true) {
      const escolha = parseInt(prompt("Selecione a moto que deseja acelerar (1 a 4)\n"));

      if (escolha >= 1 && escolha <= 4) {
        const indexMoto = escolha - 1;
        this.motos[indexMoto].acelerar();

        const indexRandom = Math.floor(Math.random() * this.motos.length);
        this.motos[indexRandom].acelerar();

        break;
      } else {
        console.log("Escolha inválida. Digite um número entre 1 e 4.");
      }
    }
  }

  verificarVencedor() {
    const ganhador = this.motos.find((moto) => moto.position >= this.tamanhoCorrida);

    if (ganhador) {
      console.log("Temos um vencedor!");
      console.log(ganhador.name, "chegou na primeira posição");
      return true;
    }

    return false;
  }

  reiniciarCorrida() {
    const resposta = prompt("Deseja reiniciar a corrida? (S/N)\n");

    if (resposta.toLowerCase() === "s") {
      this.resetarPosicoesMotos();
      return true;
    }

    return false;
  }

  resetarPosicoesMotos() {
    this.motos.forEach((moto) => {
      moto.position = 0;
    });
  }
}

// Cria uma instância da corrida e inicia a corrida
const corrida = new Corrida(20);
corrida.iniciar();

//O que é que muda?
// Qual o ganho? Qual a perda?
// Fica mais fácil de modelar?
// Posso reaproveitar a lógica? Terei que refazer?
// Fica mais fácil ou difícil de programar?