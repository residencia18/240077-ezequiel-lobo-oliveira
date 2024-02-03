using TechAdvocacia.Core.Entities;

namespace TechAdvocacia.Application.InputModels;
public class NewCasoJuridicoInputModel
{
   
    public required int AdvogadoId { get; set; }
    public required int ClienteId { get; set; }
}