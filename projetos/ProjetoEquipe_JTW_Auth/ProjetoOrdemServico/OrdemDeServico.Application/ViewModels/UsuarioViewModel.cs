

using OrdemDeServico.Domain.Entities;

namespace OrdemDeServico.Application.ViewModels
{
    public class UsuarioViewModel
    {
        public int UsuarioId { get; set; }
        public required string Email { get; set; }
        public required string Senha { get; set; }
      
    }
}