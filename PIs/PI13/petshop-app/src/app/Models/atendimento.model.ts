// atendimento.model.ts

export interface Atendimento {
  id: number;
  nomeCliente: string;
  nomePet: string;
  dataAtendimento: Date;
  observacoes: string;
}
