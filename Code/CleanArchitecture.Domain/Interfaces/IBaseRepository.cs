using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Domain.Interfaces;

    public interface IUserRepository : IBaseRepository<User>
    {
        
    }
