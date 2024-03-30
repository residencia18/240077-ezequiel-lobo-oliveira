export interface ManejoSanitario {
  id?: string; // Identificador único do manejo sanitário (opcional, pois será gerado pelo Firebase)
  data: Date; // Data do manejo sanitário
  descricao: string; // Descrição do manejo sanitário
  brincos: string[]; // Lista de brincos (identificadores dos suínos) que participaram do manejo sanitário
  atividades: string[]; // Lista de atividades planejadas para o manejo sanitário
  atividadesRealizadas: { [brinco: string]: string[] }; // Lista de atividades realizadas por cada suíno
}
