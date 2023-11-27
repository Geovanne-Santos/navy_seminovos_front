export type aluguel = {
    cartao:{
      numeroCartao: string;
      cvv: string;
      dataValidade: string;
      nomeCartao: string
    }; 
    idCarroAlugado: string; 
    kilometragemInicial: number; 
    inicioAluguel: Date; 
    finalAluguel: Date; 
    valorTotalAluguel: number; 
    idLocalVeiculo: string
  }