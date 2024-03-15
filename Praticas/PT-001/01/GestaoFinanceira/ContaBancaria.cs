
using System;
using GestaoFinanceira.Exceptions;
namespace GestaoFinanceira;

public class ContaBancaria
{
    private double saldo;

    public ContaBancaria(double saldoInicial)
    {
        if (saldoInicial < 0)
        {
            throw new ValorInvalidoException();
        }

        saldo = saldoInicial;
    }

    public double Saldo => saldo;

    public void Depositar(double valor)
    {
        try
        {
            if (valor <= 0)
            {
                throw new ValorInvalidoException();
            }

            saldo += valor;
            Console.WriteLine($"Depósito de {valor:C} realizado com sucesso. Novo saldo: {saldo:C}");
        }
        catch (ValorInvalidoException ex)
        {
            Console.WriteLine($"Erro: {ex.Message}");
        }
    }

    public void Sacar(double valor)
    {
        try
        {
            if (valor <= 0)
            {
                throw new ValorInvalidoException();
            }

            if (valor > saldo)
            {
                throw new SaldoInsuficienteException();
            }

            saldo -= valor;
            Console.WriteLine($"Saque de {valor:C} realizado com sucesso. Novo saldo: {saldo:C}");
        }
        catch (ValorInvalidoException ex)
        {
            Console.WriteLine($"Erro: {ex.Message}");
        }
        catch (SaldoInsuficienteException ex)
        {
            Console.WriteLine($"Erro: {ex.Message}");
        }
    }

    public void Transferir(double valor, ContaBancaria destino)
    {
        try
        {
            if (valor <= 0)
            {
                throw new ValorInvalidoException();
            }

            if (valor > saldo)
            {
                throw new SaldoInsuficienteException();
            }

            saldo -= valor;
            destino.Depositar(valor);
            Console.WriteLine($"Transferência de {valor:C} realizada com sucesso para conta destino. Novo saldo da origem: {saldo:C}");
        }
        catch (ValorInvalidoException ex)
        {
            Console.WriteLine($"Erro: {ex.Message}");
        }
        catch (SaldoInsuficienteException ex)
        {
            Console.WriteLine($"Erro: {ex.Message}");
        }
    }
}
