class Heroi {
    // Construtor da classe que define as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para o ataque do herói
    atacar() {
      // Variável que vai armazenar o tipo de ataque conforme o tipo do herói
      let ataque;
      
      // Definindo o tipo de ataque conforme o tipo do herói
      if (this.tipo === 'mago') {
        ataque = 'magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'shuriken';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando uma instância da classe Heroi
  const heroi1 = new Heroi('Gandalf', 100, 'mago');
  const heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
  const heroi3 = new Heroi('Bruce', 30, 'monge');
  const heroi4 = new Heroi('Naruto', 25, 'ninja');
  
  //// Chamando o método atacar para cada herói
  heroi1.atacar(); // Saída: O mago atacou usando magia
  heroi2.atacar(); // Saída: O guerreiro atacou usando espada
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken
  