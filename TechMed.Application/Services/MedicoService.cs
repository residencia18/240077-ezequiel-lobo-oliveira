using TechMed.Application.Services.Interfaces;
using TechMed.Application.ViewModels;
using TechMed.Application.InputModels;
using TechMed.Infrastructure.Persistence.Interfaces;


namespace TechMed.Application.Services;

public class MedicoService : IMedicoService
{
    private readonly ITechMedContext _context;
    public MedicoService(ITechMedContext context)
    {
        _context = context;
    }
    public void create(NewMedico medico)
    {
        throw new NotImplementedException();
    }

    public void delete(int id)
    {
        throw new NotImplementedException();
    }

    public List<OutMedico> GetAll()
    {
       return Map(_context.MedicosCollection.GetAll().ToList());
       

    }

    public OutMedico GetByCRM(string crm)
    {
        throw new NotImplementedException();
    }

    public OutMedico GetById(int id)
    {
        throw new NotImplementedException();
    }

    public void update(int id, NewMedico medico)
    {
        throw new NotImplementedException();
    }

    
    public static OutMedico Map(Medico medico){
        return new OutMedico{
            MedicoId = medico.MedicoId,
            Nome = medico.Nome
            
        };
    }
    public static List<OutMedico> Map(List<Medico> medicos){
        return medicos.Select(Map).ToList();
    }
}
