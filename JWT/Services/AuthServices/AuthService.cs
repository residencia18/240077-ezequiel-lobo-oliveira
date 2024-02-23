using JWT.Dtos;
using JWT.Model;
using JWT.Data;
using JWT.Services.SenhaServices;

namespace JWT.Services.AuthServices;




public class AuthService : IAuthInterface
{
    private readonly AppDbContext _context;
    private readonly ISenhaInterface _senhaInterface;
    public AuthService(AppDbContext context, ISenhaInterface senhaInterface)
    {
        _context = context;
        _senhaInterface = senhaInterface;

    }

    public async Task<Response<UsuarioCriacaoDto>> Resgistrar (UsuarioCriacaoDto usuarioRegistro)
    {
        Response<UsuarioCriacaoDto> respostaServico = new Response<UsuarioCriacaoDto>();
        try
        {
            if(!VerificaSeEmaileUsuarioJaExiste(usuarioRegistro))
            {
                respostaServico.Dados = null;
                respostaServico.Status = false;
                respostaServico.Mensagem = "Email ou Usuario já existe";

            }
            _senhaInterface.CriarSenhaHash(usuarioRegistro.Senha, out byte[] senhaHash, out byte[] senhaSalt);
            UsuarioModel usuario = new UsuarioModel
            {
                Usuario = usuarioRegistro.Usuario,
                Email = usuarioRegistro.Email,
                SenhaHash = senhaHash,
                SenhaSalt = senhaSalt,
                Cargo = usuarioRegistro.Cargo
            };

            _context.Add(usuario);
            await _context.SaveChangesAsync();
            respostaServico.Mensagem = "Usuario criado com sucesso";
        }
        catch (Exception ex)
        {
           respostaServico.Dados = null;
           respostaServico.Mensagem = ex.Message;
           respostaServico.Status = false;
        }
        return respostaServico;

    }

    private bool VerificaSeEmaileUsuarioJaExiste(UsuarioCriacaoDto usuarioRegistro)
    {
        var usuario = _context.Usuarios.FirstOrDefault(u => u.Email == usuarioRegistro.Email  || u.Usuario == usuarioRegistro.Usuario);
        
        if(usuario != null){ return false;}
        return true;
    }
}

