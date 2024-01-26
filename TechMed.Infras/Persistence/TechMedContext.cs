using TechMed.Infrastructure.Persistence.Interfaces;

using TechMed.Infrastructure.Persistence;
public class TechMedContext : IDatabaseFake, ITechMedContext
{
   public IMedicoCollection MedicosCollection { get; } = new MedicosDB();
   public IPacienteCollection PacientesCollection { get; } = new PacientesDB();
   public IAtendimentoCollection AtendimentosCollection { get; } = new AtendimentosDB();
}
