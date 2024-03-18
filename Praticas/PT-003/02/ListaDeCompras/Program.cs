using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        // Inicializando a lista de itens do mercado
        List<ItemMercado> listaItens = new List<ItemMercado>
        {
            new ItemMercado { Nome = "Arroz", Tipo = Tipo.Comida, Preco = 3.90 },
            new ItemMercado { Nome = "Azeite", Tipo = Tipo.Comida, Preco = 2.50 },
            new ItemMercado { Nome = "Macarrão", Tipo = Tipo.Comida, Preco = 3.90 },
            new ItemMercado { Nome = "Cerveja", Tipo = Tipo.Bebida, Preco = 22.90 },
            new ItemMercado { Nome = "Refrigerante", Tipo = Tipo.Bebida, Preco = 5.50 },
            new ItemMercado { Nome = "Shampoo", Tipo = Tipo.Higiene, Preco = 7.00 },
            new ItemMercado { Nome = "Sabonete", Tipo = Tipo.Higiene, Preco = 2.40 },
            new ItemMercado { Nome = "Cotonete", Tipo = Tipo.Higiene, Preco = 5.70 },
            new ItemMercado { Nome = "Sabão em pó", Tipo = Tipo.Limpeza, Preco = 8.20 },
            new ItemMercado { Nome = "Detergente", Tipo = Tipo.Limpeza, Preco = 2.60 },
            new ItemMercado { Nome = "Amaciante", Tipo = Tipo.Limpeza, Preco = 6.40 }
        };

        // 1) Itens de Higiene ordenados por ordem decrescente de preço
        var itensHigieneOrdenados = listaItens.Where(item => item.Tipo == Tipo.Higiene)
                                              .OrderByDescending(item => item.Preco)
                                              .ToList();
        Console.WriteLine("Itens de Higiene ordenados por preço decrescente:");
        foreach (var item in itensHigieneOrdenados)
        {
            Console.WriteLine($"Nome: {item.Nome}, Tipo: {item.Tipo}, Preço: R$ {item.Preco:F2}");
        }
        Console.WriteLine();

        // 2) Itens com preço maior ou igual a R$ 5,00, ordenados por ordem crescente de preço
        var itensPrecoMaiorQueCinco = listaItens.Where(item => item.Preco >= 5.00)
                                                 .OrderBy(item => item.Preco)
                                                 .ToList();
        Console.WriteLine("Itens com preço maior ou igual a R$ 5,00, ordenados por preço crescente:");
        foreach (var item in itensPrecoMaiorQueCinco)
        {
            Console.WriteLine($"Nome: {item.Nome}, Tipo: {item.Tipo}, Preço: R$ {item.Preco:F2}");
        }
        Console.WriteLine();

        // 3) Itens de Comida ou Bebida ordenados por nome em ordem alfabética
        var itensComidaBebidaOrdenados = listaItens.Where(item => item.Tipo == Tipo.Comida || item.Tipo == Tipo.Bebida)
                                                    .OrderBy(item => item.Nome)
                                                    .ToList();
        Console.WriteLine("Itens de Comida ou Bebida ordenados por nome:");
        foreach (var item in itensComidaBebidaOrdenados)
        {
            Console.WriteLine($"Nome: {item.Nome}, Tipo: {item.Tipo}, Preço: R$ {item.Preco:F2}");
        }
        Console.WriteLine();

        // 4) Quantidade de itens de cada tipo
        var quantidadePorTipo = listaItens.GroupBy(item => item.Tipo)
                                          .Select(g => new { Tipo = g.Key, Quantidade = g.Count() })
                                          .ToList();
        Console.WriteLine("Quantidade de itens de cada tipo:");
        foreach (var item in quantidadePorTipo)
        {
            Console.WriteLine($"Tipo: {item.Tipo}, Quantidade: {item.Quantidade}");
        }
        Console.WriteLine();

        // 5) Preço máximo, mínimo e médio de cada tipo
        var precoPorTipo = listaItens.GroupBy(item => item.Tipo)
                                     .Select(g => new
                                     {
                                         Tipo = g.Key,
                                         PrecoMaximo = g.Max(item => item.Preco),
                                         PrecoMinimo = g.Min(item => item.Preco),
                                         PrecoMedio = g.Average(item => item.Preco)
                                     })
                                     .ToList();
        Console.WriteLine("Preço máximo, mínimo e médio de cada tipo:");
        foreach (var item in precoPorTipo)
        {
            Console.WriteLine($"Tipo: {item.Tipo}, Preço Máximo: R$ {item.PrecoMaximo:F2}, " +
                              $"Preço Mínimo: R$ {item.PrecoMinimo:F2}, Preço Médio: R$ {item.PrecoMedio:F2}");
        }
    }
}