using System;
using System.Buffers.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanArchitecture.Domain.Interfaces
{
    public interface IBaseRepository<T> where T: BaseEntity{
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<T> Get(Guid id, CancellationToken cancelationToken);
        Task<List<T>> GetAll(Guid id, CancellationToken cancelationToken);

        
    }

    public class BaseEntity
    {
    }
}