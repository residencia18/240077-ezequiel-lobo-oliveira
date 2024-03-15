namespace GestaoFinanceira.Exceptions;

public class SaldoInsuficienteException : Exception
{
    public SaldoInsuficienteException() : base($"O valor de um saque ou transferência é superior ao saldo disponível.")
    {
    }
}
