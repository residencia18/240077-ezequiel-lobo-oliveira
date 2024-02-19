
using LinhaDeMontagem;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<LinhaDeMontagemDescricao>();

var app = builder.Build();


app.UseAddChassiMiddleware();
app.UseAddMotorMiddleware();
app.UseMiddleware<AddPortasMiddleware>();
app.UseMiddleware<AddPinturaMiddleware>();
app.UseMiddleware<AddInternoMiddleware>();


app.Run();