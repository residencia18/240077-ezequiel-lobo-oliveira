using Microsoft.EntityFrameworkCore;

using TechMed.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<TechMedDbContext>(options => {
    var connectionString = builder.Configuration.GetConnectionString("TechMedDb");
    var serverVersion = ServerVersion.AutoDetect(connectionString);
    options.UseMySql(connectionString, serverVersion);
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();