namespace TechAdvocacia.Core.Exceptions;
public class MedicoAlreadyExistsException :Exception
{ 
    public MedicoAlreadyExistsException():base("Medico já existente com esse CRM"){

    }

}
