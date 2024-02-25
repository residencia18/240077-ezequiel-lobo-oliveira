namespace OrdemDeServico.Domain.Entities;
public class Endereco : BaseEntity
{
    public int EnderecoId { get; set; }
    public required string Logradouro { get; set; }
    public required string Numero { get; set; }
    public required string Cidade { get; set; }
    public string? Complemento { get; set; }
    public required string Bairro { get; set; }
    public required string Estado { get; set; }
    public required string Cep { get; set; }
    public required string Pais { get; set; }

    public Cliente? Cliente { get; set; }
    public PrestadorDeServico? PrestadorDeServico { get; set; }
    public ServicoOrdemServico? ServicoOrdemServico { get; set; }
}
