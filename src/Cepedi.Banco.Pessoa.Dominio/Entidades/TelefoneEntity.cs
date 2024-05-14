namespace Cepedi.Banco.Pessoa.Dominio.Entidades;

public class TelefoneEntity
{
    public int Id { get; set; }
    public string CodPais { get; set; } = default!;
    public string Ddd { get; set; } = default!;
    public string Numero { get; set; } = default!;
    public string Tipo { get; set; } = default!;
    public bool Principal { get; set; } = default!;  
    public int IdPessoa { get; set; }

    public PessoaEntity Pessoa { get; set; } = default!;
}
