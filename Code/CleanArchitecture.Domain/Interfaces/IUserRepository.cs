namespace CleanArchitecture.Domain.Interfaces;

public interface IUserRepository<User>
{
     Task<User> GetByEmail(string email, CancellationToken cancellationToken);

}
