using TechAdvocacia.Application.InputModels;
using TechAdvocacia.Application.ViewModels;
using TechAdvocacia.Infrastructure.Persistence;
using TechAdvocacia.Core.Entities;

namespace TechAdvocacia.Application.Services.Interfaces;

public class ClienteService : IClienteService
{
    private readonly TechAdvocaciaDbContext _context;
    public ClienteService(TechAdvocaciaDbContext context)
    {
        _context = context;
    }
    
    public int Create(NewClienteInputModel cliente)
    {
        var _cliente = new Cliente
        {
            Nome = cliente.Nome
        };

        _context.Clientes.Add(_cliente);
        _context.SaveChanges();

        return _cliente.ClienteId;
    }

    public void Delete(int id)
    {
        var _cliente = GetDbCliente(id);

        _context.Clientes.Remove(_cliente);
        _context.SaveChanges();
    }

    public List<ClienteViewModel> GetAll()
    {
        var _clientes = _context.Clientes.Select(cliente => new ClienteViewModel()
        {
            ClienteId = cliente.ClienteId,
            Nome = cliente.Nome
        });

        return _clientes.ToList();
    }

    public ClienteViewModel GetById(int id)
    {
        var _cliente = GetDbCliente(id);

        return new ClienteViewModel
        {
            ClienteId = _cliente.ClienteId,
            Nome = _cliente.Nome
        };
    }

     public void Update(int id, NewClienteInputModel cliente)
    {
        var _cliente = GetDbCliente(id);

        _cliente.Nome = cliente.Nome;

        _context.Clientes.Update(_cliente);
        _context.SaveChanges();
    }
    public Cliente GetDbCliente(int id)
    {
        var _cliente = _context.Clientes.FirstOrDefault(cliente => cliente.ClienteId == id);

        if (_cliente == null)
        {
           
        }

        return _cliente;
    }
}
