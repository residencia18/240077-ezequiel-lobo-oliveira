using JWT.Dtos;
using JWT.Model;
using JWT.Data;

namespace JWT.Services.AuthServices;




public class AuthService : IAuthInterface
{
    private readonly AppDbContext _context;
    public AuthService(AppDbContext context)
    {
        _context = context;
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

