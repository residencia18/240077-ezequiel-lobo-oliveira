using System.Text;
namespace LinhaDeMontagem;



    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseAddChassiMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<AddChassiMiddleware>();
        }

        public static IApplicationBuilder UseAddMotorMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<AddMotorMiddleware>();
        }

        public static IApplicationBuilder UseAddPortasMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<AddPortasMiddleware>();
        }
        public static IApplicationBuilder UseAddPinturaMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<AddPinturaMiddleware>();
        }
        public static IApplicationBuilder UseAddInternoMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<AddInternoMiddleware>();
        }

    }
