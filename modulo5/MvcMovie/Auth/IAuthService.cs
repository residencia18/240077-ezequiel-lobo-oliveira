namespace Mvc.Auth;
public interface IAuthService
{
    string GenerateJwtToken(string email, string password);
    string ComputeSha256Hash(string pass);
    

}