using Microsoft.EntityFrameworkCore;
using TechAdvocacia.Application.Services;
using TechAdvocacia.Application.Services.Interfaces;
using TechAdvocacia.Infrastructure.Persistence;
using TechAdvocacia.Infrastructure.Persistence.Interfaces;
using TechAdvocacia.Core.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<TechAdvocaciaDbContext>(options => {
    var connectionString = builder.Configuration.GetConnectionString("TechAdvocaciaDb");
    var serverVersion = ServerVersion.AutoDetect(connectionString);
    options.UseMySql(connectionString, serverVersion);
});

builder.Services.AddScoped<IAdvogadoService, AdvogadoService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TechAdvocacia.WebAPI v1"));
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();