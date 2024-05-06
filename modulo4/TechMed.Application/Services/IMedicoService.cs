namespace TechMed.Application.Services.Interfaces;
using TechMed.Application.ViewModels;
using TechMed.Application.InputModels;

public interface IMedicoService
{
    public List<OutMedico> GetAll();
    public OutMedico GetById(int id);
    public OutMedico GetByCRM(string crm);
    public void create(NewMedico medico);
    public void update(int id,NewMedico medico);
    public void delete(int id);
    
}
