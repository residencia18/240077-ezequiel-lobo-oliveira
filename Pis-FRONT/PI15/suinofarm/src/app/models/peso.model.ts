export interface HistoricoPeso {
    id: string; // Identificador único do histórico de peso
    idSuino: string; // Identificador do suíno associado a este histórico de peso
    dataPesagem: Date; // Data da pesagem
    peso: number; // Peso do animal na data da pesagem
  }
  