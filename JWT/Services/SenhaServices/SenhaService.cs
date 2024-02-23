namespace JWT.Services.SenhaServices;

public class SenhaService : ISenhaInterface
{
    public void CriarSenhaHash(String Senha, out byte[] SenhaHash, out byte[] SenhaSalt)
    {
        using (var hmac = new System.Security.Cryptography.HMACSHA512())
        {
            SenhaSalt = hmac.Key;
            SenhaHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(Senha));
        }
    }

}


    
