namespace TechMed.Core.Entities;

public abstract class Pessoa : BaseEntity
{
    public string? Nome { get; set; }
    public string? CPF { get; set; }

}
