using Modulo4.LinhaDeMontagem;
using static Modulo4.LinhaDeMontagem.LinhaDeMontagemDescricao;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<LinhaDeMontagemDescricao>();

var app = builder.Build();
//app.UseHttpsRedirection();

app.UseMiddleware<RequestTimingMiddleware>();

app.UseMiddleware<CustomHeaderMiddleware>();

app.UseMiddleware<AddChassiMiddleware>();
app.UseMiddleware<AddMotorMiddleware>();
app.UseMiddleware<AddPortasMiddleware>();
app.UseMiddleware<AddPinturaMiddleware>();
app.UseMiddleware<AddInternoMiddleware>();

app.Run();
