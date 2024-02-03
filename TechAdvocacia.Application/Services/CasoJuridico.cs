using TechAdvocacia.Application.InputModels;
using TechAdvocacia.Application.Services.Interfaces;
using TechAdvocacia.Application.ViewModels;
using TechAdvocacia.Core.Entities;
using TechAdvocacia.Core.Exceptions;
using TechAdvocacia.Infrastructure.Persistence;

namespace TechAdvocacia.Application.Services;
public class CasoJuridicoService : ICasoJuridicoService
{
    private readonly TechAdvocaciaDbContext _context;
    private readonly IAdvogadoService _advogadoService;
    private readonly IClienteService _clienteService;
    private readonly IDocumentoService _documentoService;
    public CasoJuridicoService(
        TechAdvocaciaDbContext context,
        IAdvogadoService advogadoService,
        IClienteService clienteService,
        IDocumentoService documentoService
    )
    {
        _context = context;
        _advogadoService = advogadoService;
        _clienteService = clienteService;
        _documentoService = documentoService;
    }

    public int Create(NewCasoJuridicoInputModel casoJuridico)
    {
        var _cliente = _context.Clientes.FirstOrDefault(c => c.ClienteId == casoJuridico.ClienteId);
        if (_cliente is null)
        {
            
        }

        var _advogado = _context.Advogados.FirstOrDefault(a => a.AdvogadoId == casoJuridico.AdvogadoId);
        if (_advogado is null)
        {
            throw new AdvogadoNotFoundException();
        }

        var _casoJuridico = new CasoJuridico
        {
           
            Advogado = _advogado,
            Cliente = _cliente,
            Documentos = new List<Documento>()
        };

        _context.CasosJuridicos.Add(_casoJuridico);
        _context.SaveChanges();

        return _casoJuridico.CasoJuridicoId;
    }

    public void Delete(int id)
    {
        var _casoJuridico = GetDbCasoJuridico(id);

        _context.CasosJuridicos.Remove(_casoJuridico);
        _context.SaveChanges();
    }

    public List<CasoJuridicoViewModel> GetAll()
    {
        var _casosJuridicos = _context.CasosJuridicos.Select(cj => new CasoJuridicoViewModel()
        {
            CasoJuridicoId = cj.CasoJuridicoId,
           
            Advogado = new AdvogadoViewModel
            {
                AdvogadoId = cj.Advogado.AdvogadoId,
                Nome = cj.Advogado.Nome
            },
            Cliente = new ClienteViewModel
            {
                ClienteId = cj.Cliente.ClienteId,
                Nome = cj.Cliente.Nome
            },
            Documentos = cj.Documentos.Select(
                documento => new DocumentoViewModel
                {
                    DocumentoId = documento.DocumentoId,
                   
                }
            ).ToList()
        }).ToList();

        return _casosJuridicos;
    }

    public CasoJuridicoViewModel GetById(int id)
    {
        var _casoJuridico = GetDbCasoJuridico(id);

        return new CasoJuridicoViewModel
        {
            
            Advogado = _advogadoService.GetById(_casoJuridico.AdvogadoId),
            Cliente = _clienteService.GetById(_casoJuridico.ClienteId),
            Documentos = _casoJuridico.Documentos.Select(
                documento => new DocumentoViewModel
                {
                    DocumentoId = documento.DocumentoId,
                   
                }
            ).ToList()
        };
    }

    public void Update(int id, NewCasoJuridicoInputModel casoJuridico)
    {
        var _casoJuridico = GetDbCasoJuridico(id);

       

        _context.Update(_casoJuridico);
        _context.SaveChanges();
    }

    public CasoJuridico GetDbCasoJuridico(int id)
    {
        var _casoJuridico = _context.CasosJuridicos.FirstOrDefault(cj => cj.CasoJuridicoId == id);

        if (_casoJuridico is null)
        {
          
        }

        return _casoJuridico;
    }
}