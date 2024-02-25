using ResTIConnect.Domain.Entities;
using ResTIConnect.Domain.Exceptions;
using ResTIConnect.Infrastructure.Context;
using ResTIConnect.Application.InputModels;
using ResTIConnect.Application.Services.Interfaces;
using ResTIConnect.Application.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace ResTIConnect.Application.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly ResTIConnectDbContext _context;
        private readonly IEnderecoService _enderecoservice;

        public UsuarioService(ResTIConnectDbContext context, IEnderecoService enderecoservice)
        {
            _context = context;
            _enderecoservice = enderecoservice;
        }

        private string ComputeSha256Hash(string input)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }

        public int Create(NewUsuarioInputModel usuario)
        {
            var senhaCriptografada = ComputeSha256Hash(usuario.Senha);

            var _usuario = new Usuario
            {
                Nome = usuario.Nome,
                Apelido = usuario.Apelido,
                Email = usuario.Email,
                Senha = senhaCriptografada, 
                Telefone = usuario.Telefone,
                Endereco = new Endereco
                {
                    Bairro = usuario.Endereco.Bairro,
                    Logradouro = usuario.Endereco.Logradouro,
                    Numero = usuario.Endereco.Numero,
                    Complemento = usuario.Endereco.Complemento,
                    Cidade = usuario.Endereco.Cidade,
                    Estado = usuario.Endereco.Estado,
                    Pais = usuario.Endereco.Pais,
                    Cep = usuario.Endereco.Cep,
                },
                Sistemas = new List<Sistema>()
            };

            _context.Usuarios.Add(_usuario);
            _context.SaveChanges();

            return _usuario.UsuarioId;
        }

        

        public void Update(int id, NewUsuarioInputModel usuario)
        {
            var _usuarioDb = GetByDbId(id);

            _usuarioDb.Nome = usuario.Nome;
            _usuarioDb.Apelido = usuario.Apelido;
            _usuarioDb.Email = usuario.Email;
            _usuarioDb.Senha = ComputeSha256Hash(usuario.Senha); // Atualize o hash da senha
            _usuarioDb.Telefone = usuario.Telefone;
            _enderecoservice.Update(_usuarioDb.Endereco.EnderecoId, usuario.Endereco);

            _context.Usuarios.Update(_usuarioDb);
            _context.SaveChanges();
        }

        public bool VerifyPassword(int id, string senha)
        {
            var usuario = GetByDbId(id);
            var senhaCriptografada = ComputeSha256Hash(senha);
            return usuario.Senha == senhaCriptografada;
        }

         public List<UsuarioViewModel> GetAll()
        {
            var user = _context.Usuarios
                .Select(u => new UsuarioViewModel
                {
                    UsuarioId = u.UsuarioId,
                    Nome = u.Nome,
                    Apelido = u.Apelido ?? "",
                    Email = u.Email,
                    Senha = u.Senha,
                    Telefone = u.Telefone,
                    Endereco = new EnderecoViewModel
                    {
                        Bairro = u.Endereco.Bairro,
                        Cep = u.Endereco.Cep,
                        Cidade = u.Endereco.Cidade,
                        Complemento = u.Endereco.Complemento,
                        EnderecoId = u.Endereco.EnderecoId,
                        Estado = u.Endereco.Estado,
                        Logradouro = u.Endereco.Logradouro,
                        Numero = u.Endereco.Numero,
                        Pais = u.Endereco.Pais
                    }
                })
                .ToList();

            return user;
        }

        public List<UsuarioViewModel> GetByPerfilId(int perfilId)
        {
            var usuarios = _context.Usuarios
                .Where(u => u.Perfis!.Any(p => p.PerfilId == perfilId))
                .Select(u => new UsuarioViewModel
                {
                    UsuarioId = u.UsuarioId,
                    Nome = u.Nome,
                    Apelido = u.Apelido ?? "",
                    Email = u.Email,
                    Senha = u.Senha,
                    Telefone = u.Telefone,
                    Endereco = new EnderecoViewModel
                    {
                        Bairro = u.Endereco.Bairro,
                        Cep = u.Endereco.Cep,
                        Cidade = u.Endereco.Cidade,
                        Complemento = u.Endereco.Complemento,
                        EnderecoId = u.Endereco.EnderecoId,
                        Estado = u.Endereco.Estado,
                        Logradouro = u.Endereco.Logradouro,
                        Numero = u.Endereco.Numero,
                        Pais = u.Endereco.Pais
                    }
                })
                .ToList();

            return usuarios;
        }

        public List<UsuarioViewModel> GetBySistemaId(int sistemaId)
        {
            var usuarios = _context.Usuarios
                .Where(u => u.Sistemas!.Any(s => s.SistemaId == sistemaId))
                .Select(u => new UsuarioViewModel
                {
                    UsuarioId = u.UsuarioId,
                    Nome = u.Nome,
                    Apelido = u.Apelido ?? "",
                    Email = u.Email,
                    Senha = u.Senha,
                    Telefone = u.Telefone,
                    Endereco = new EnderecoViewModel
                    {
                        Bairro = u.Endereco.Bairro,
                        Cep = u.Endereco.Cep,
                        Cidade = u.Endereco.Cidade,
                        Complemento = u.Endereco.Complemento,
                        EnderecoId = u.Endereco.EnderecoId,
                        Estado = u.Endereco.Estado,
                        Logradouro = u.Endereco.Logradouro,
                        Numero = u.Endereco.Numero,
                        Pais = u.Endereco.Pais
                    }
                })
                .ToList();

            return usuarios;
        }

        public Usuario GetByDbId(int id)
        {
            var user = _context.Usuarios.Find(id);

            if (user is null)
                throw new UsuarioNotFoundException();

            return user;
        }


        public void Delete(int id)
        {
            _context.Usuarios.Remove(GetByDbId(id));
            _context.SaveChanges();
        }

        public UsuarioViewModel? GetById(int id)
        {
            var usuario = GetByDbId(id);
            var _endereco = _enderecoservice.GetById(usuario.EnderecoId)!;

            var _usuarioViewModel = new UsuarioViewModel
            {
                UsuarioId = usuario.UsuarioId,
                Nome = usuario.Nome,
                Apelido = usuario.Apelido ?? "",
                Email = usuario.Email,
                Senha = usuario.Senha,
                Telefone = usuario.Telefone,
                Endereco = _endereco
            };

            return _usuarioViewModel;
        }

        public List<UsuarioViewModel> GetByEstado(string estado)
        {
            var usuarios = _context.Usuarios
               .Where(u => u.Endereco.Estado == estado)
               .Select(u => new UsuarioViewModel
               {
                   UsuarioId = u.UsuarioId,
                   Nome = u.Nome,
                   Apelido = u.Apelido ?? "",
                   Email = u.Email,
                   Senha = u.Senha,
                   Telefone = u.Telefone,
                   Endereco = new EnderecoViewModel
                   {
                       Bairro = u.Endereco.Bairro,
                       Cep = u.Endereco.Cep,
                       Cidade = u.Endereco.Cidade,
                       Complemento = u.Endereco.Complemento,
                       EnderecoId = u.Endereco.EnderecoId,
                       Estado = u.Endereco.Estado,
                       Logradouro = u.Endereco.Logradouro,
                       Numero = u.Endereco.Numero,
                       Pais = u.Endereco.Pais
                   }
               })
               .ToList();

            return usuarios;
        }

        public string GenerateJwtToken(int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Chave super secreta impossivel de descobrir"); 
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", userId.ToString()) }),
                Expires = DateTime.UtcNow.AddHours(1), 
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public int? Login(string email, string senha)
        {
            
            var senhaCriptografada = ComputeSha256Hash(senha);

            
            var usuario = _context.Usuarios.SingleOrDefault(u => u.Email == email && u.Senha == senhaCriptografada);

            
            return usuario?.UsuarioId;
        }


        
    }
}
