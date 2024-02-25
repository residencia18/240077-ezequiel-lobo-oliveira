using OrdemDeServico.Domain.Entities;
using OrdemDeServico.Application.InputModels;
using OrdemDeServico.Application.Services.Interfaces;
using OrdemDeServico.Application.ViewModels;
using OrdemDeServico.Infrastructure.Auth;
using OrdemDeServico.Infrastructure.Persistence;
using OrdemDeServico.Domain.Exceptions;

namespace OrdemDeServico.Application.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly OrdemDeServicoContext _context;
        private readonly IEnderecoService _enderecoservice;
        private readonly IAuthService _authService;

        public UsuarioService(OrdemDeServicoContext context, IEnderecoService enderecoservice, IAuthService authService)
        {
            _context = context;
            _enderecoservice = enderecoservice;
            _authService = authService;
        }

        public int Create(NewUsuarioInputModel usuario)
        {
            var senhaCriptografada = _authService.ComputeSha256Hash(usuario.Senha);

            var _usuario = new Usuario
            {
                Email = usuario.Email,
                Senha = senhaCriptografada
            };

            _context.Usuarios.Add(_usuario);
            _context.SaveChanges();

            return _usuario.UsuarioId; // Assumindo que Id é o nome da propriedade que representa a chave primária
        }

        public void Update(int id, NewUsuarioInputModel usuario)
        {
            var _usuarioDb = GetByDbId(id);

            _usuarioDb.Email = usuario.Email;
            _usuarioDb.Senha = _authService.ComputeSha256Hash(usuario.Senha); // Atualize o hash da senha

            _context.Usuarios.Update(_usuarioDb);
            _context.SaveChanges();
        }


        public Usuario GetByDbId(int id)
        {
            var usuario = _context.Usuarios.Find(id);

            if (usuario is null)
                throw new UsuarioNotFoundException();

            return usuario;
        }

        public void Delete(int id)
        {
            _context.Usuarios.Remove(GetByDbId(id));
            _context.SaveChanges();
        }

        public int? Login(string email, string senha)
        {
            var senhaCriptografada = _authService.ComputeSha256Hash(senha);

            var usuario = _context.Usuarios.SingleOrDefault(u => u.Email == email && u.Senha == senhaCriptografada);

            return usuario?.UsuarioId; // Assumindo que Id é o nome da propriedade que representa a chave primária
        }

        public UsuarioViewModel? GetById(int id)
        {
            var usuario = GetByDbId(id);

            return new UsuarioViewModel
            {
                UsuarioId = usuario.UsuarioId,
                Email = usuario.Email,
                Senha = usuario.Senha
            };
        }

        public ICollection<UsuarioViewModel> GetAll()
        {
            var usuarios = _context.Usuarios
                .Select(u => new UsuarioViewModel
                {
                    UsuarioId = u.UsuarioId, // Assumindo que Id é o nome da propriedade que representa a chave primária
                    Email = u.Email,
                    Senha = u.Senha
                })
                .ToList();

            return usuarios;
        }
    }
}
