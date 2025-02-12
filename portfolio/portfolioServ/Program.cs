
using Microsoft.AspNetCore.Cors;

namespace portfolioServ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name:"AllowAllOrigins",
                    configurePolicy: policy =>
                    {
                        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors();

            string api = "d66e7383458df29e206c737bffcfd9414f0e0a9824d4a144c5f27fabb38cdb37";
            string id = "675924a1bcdc0f36f2c3c676";

            HttpClient client = new HttpClient();

            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {api}");
            
            app.MapGet("/getWebflowCollection", async (HttpContext httpContext) =>
            {
                using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, $"https://api.webflow.com/v2/collections/{id}/items");
                
                //using HttpResponseMessage response = await client.SendAsync(request);

                using HttpResponseMessage response = await client.GetAsync($"https://api.webflow.com/v2/collections/{id}/items");
                string content = await response.Content.ReadAsStringAsync();
                return content;
            })
            .WithName("GetWebflowCollection")
            .WithOpenApi().RequireCors("AllowAllOrigins");

            app.Run();
        }
    }
}
