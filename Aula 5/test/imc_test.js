const { expect } = require('chai');
const { calculaIMC, classificaIMC, atualizaHistorico } = require('../src/imc');

describe('Calculadora de IMC', () => {

    it('Calculadora deve rodar tranquilo', () => {
      const peso = 80; // 80 kg
      const altura = 180; // 180 cm
  
      const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
      const IMCCalculado = calculaIMC(peso, altura);
  
      expect(IMCCalculado).to.equal(IMEsperado);
    });
  
    it('altura = 0, entrada inadequada', () => {
      const peso = 70; // 70 kg
      const altura = 0; // 0 cm
  
      const IMCCalculado = calculaIMC(peso, altura);
  
      expect(IMCCalculado).to.equal('NaN');
    });

    it("Teste classificacao, Peso Ideal", () => {
        const peso = 75
        const altura = 178

        const classificacaoIMC = classificaIMC(calculaIMC(peso, altura))

        expect(classificacaoIMC).to.equal("Peso ideal")
    });

    it("Teste classificacao, IMC invalida", () => {
        const peso = 80
        const altura = 0

        const classificacaoIMC = classificaIMC(calculaIMC(peso, altura))

        expect(classificacaoIMC).to.equal("IMC invalido")
    });

    it("Teste historico, adicionando com sucesso", () => {
        const peso = 80
        const altura = 178
        const historicoIMC = []

        const IMC = calculaIMC(peso, altura)

        atualizaHistorico(historicoIMC, IMC)

        expect(historicoIMC.length).to.equal(1)
    });

    it("Teste historico, testa valor adicionado", () => {
        const peso = 80
        const altura = 178
        const historicoIMC = []

        const IMC = calculaIMC(peso, altura)

        atualizaHistorico(historicoIMC, IMC)

        expect(historicoIMC[0]).to.equal(IMC)
    });

    it("Teste historico, nao adiciona", () => {
        const peso = 80
        const altura = 0
        const historicoIMC = []

        const IMC = calculaIMC(peso, altura)

        atualizaHistorico(historicoIMC, IMC)

        expect(historicoIMC.length).to.equal(0)
    });

});