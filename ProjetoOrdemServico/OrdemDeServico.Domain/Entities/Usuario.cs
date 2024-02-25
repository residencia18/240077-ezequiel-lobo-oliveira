using OrdemDeServico.Domain.Entities;

namespace OrdemDeServico.Domain.Entities;

public class Usuario : BaseEntity
{
    public int UsuarioId { get; set; }

    public required string Senha { get; set; }
    
    public required string Email { get; set; }   
   
}