using Microsoft.EntityFrameworkCore;
using TechAdvocacia.Application.Services;
using TechAdvocacia.Application.Services.Interfaces;
using TechAdvocacia.Infrastructure.Persistence;
using TechAdvocacia.Infrastructure.Persistence.Interfaces;
using TechAdvocacia.Core.Entities;
using TechAdvocacia.Infrastructure.Persistence;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddSingleton<ITechAdvocaciaContext, TechAdvocaciaContext>();
builder.Services.AddScoped<IAdvogadoService, AdvogadoService>();

builder.Services.AddDbContext<TechAdvocaciaDbContext>(options => {
    var connectionString = builder.Configuration.GetConnectionString("TechMedDb");
    var serverVersion = ServerVersion.AutoDetect(connectionString);
    options.UseMySql(connectionString, serverVersion);
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();