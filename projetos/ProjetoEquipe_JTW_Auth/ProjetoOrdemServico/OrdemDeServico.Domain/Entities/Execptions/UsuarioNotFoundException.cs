namespace OrdemDeServico.Domain.Exceptions
{
    public class UsuarioNotFoundException: Exception
    {
        public UsuarioNotFoundException() :
           base("O usuário selecionado não foi encontrado.")
        {
        }
    }
}