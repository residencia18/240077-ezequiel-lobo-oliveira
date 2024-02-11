﻿namespace TechMed.Application.ViewModels;

public class AtendimentoViewModel
{
    public int AtendimentoId { get; set; }
    public required DateTimeOffset DataHoraInicio { get; set; }
    public required DateTimeOffset DataHoraFim { get; set; }
    public required string SuspeitaInicial { get; set; }
    public required string Diagnostico { get; set; }
    public PacienteViewModel Paciente { get; set; } = null!;
    public MedicoViewModel Medico { get; set; } = null!;
}
