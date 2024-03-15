namespace GestaoFinanceira.Exceptions;

public class ValorInvalidoException : Exception
{
    public ValorInvalidoException() : base($"O valor utilizado nas operações de depósito, saque ou transferência deve ser maior que zero.")
    {
    }
}
