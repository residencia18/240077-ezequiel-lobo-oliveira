namespace CleanArchitecture.Domain.Interfaces;

public interface IUserRepossitory<User>
{
     Task<User> GetByEmail(string email, CancellationToken cancellationToken);

}
