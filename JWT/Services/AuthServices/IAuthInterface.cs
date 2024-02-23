namespace JWT.Services.AuthServices;
using JWT.Dtos;
using JWT.Model;

public interface IAuthInterface
{
    Task<Response<UsuarioCriacaoDto>> Resgistrar (UsuarioCriacaoDto usuarioRegistro);
}
