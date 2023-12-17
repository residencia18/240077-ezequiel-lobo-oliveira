using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CleanArchitecture.Domain.Interfaces;

namespace CleanArchitecture.Domain.Entities;
    public sealed class User : BaseEntity{
        public string? Email {get; set;}
        public string? Name { get; set;}
    }
