namespace JWT.Services.SenhaServices;

public interface ISenhaInterface
{
    void CriarSenhaHash(String Senha, out byte[] SenhaHash, out byte[] SenhaSalt);
}
