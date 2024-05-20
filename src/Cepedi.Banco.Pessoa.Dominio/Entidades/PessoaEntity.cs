using Cepedi.Banco.Pessoa.Compartilhado.Requests;
namespace Cepedi.Banco.Pessoa.Dominio.Entidades
{
    public class PessoaEntity
    {
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        public string Email { get; set; } = default!;
        public DateTimeOffset DataNascimento { get; set; }
        public string Cpf { get; set; } = default!;
        public string Genero { get; set; } = default!;
        public string EstadoCivil { get; set; } = default!;
        public string Nacionalidade { get; set; } = default!;
        public ICollection<EnderecoEntity> Enderecos { get; set; } = new List<EnderecoEntity>();
        public ICollection<TelefoneEntity> Telefones { get; set; } = new List<TelefoneEntity>();

        public void Atualizar(AtualizarPessoaRequest request)
        {
            Nome = request.Nome;
            Email = request.Email;
            DataNascimento = request.DataNascimento;
            Cpf = request.Cpf;
            Genero = request.Genero;
            EstadoCivil = request.EstadoCivil;
            Nacionalidade = request.Nacionalidade;
        }

    }
}

