namespace TechAdvocacia.Core.Entities;
public abstract class BaseEntity{
    public DateTimeOffset? DeletedAt {get; set;}
    public DateTimeOffset CreatedAt {get; set;}
    public DateTimeOffset? UpdatedAt {get; set;}

}