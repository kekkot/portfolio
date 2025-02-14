using Microsoft.AspNetCore.Cors;
using System.Text.Json;
using System.Text.Json.Serialization;

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
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: "AllowAllOrigins",
                    configurePolicy: policy =>
                    {
                        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
            });
            var app = builder.Build();

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseCors();

            string api = "d66e7383458df29e206c737bffcfd9414f0e0a9824d4a144c5f27fabb38cdb37";
            string id = "675924a1bcdc0f36f2c3c676";

            HttpClient client = new HttpClient();
            translate test = new translate { text = "Hello, world!", source_lang = "EN", target_lang = "RU" };

            
            async void post()
            {
                //using var responce = await client.PostAsJsonAsync("http://host.docker.internal:1188/translate", test);
                JsonContent content = JsonContent.Create(test);
                using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, "http://host.docker.internal:1188/translate");
                request.Content = content;
                
                using HttpResponseMessage responce = await client.SendAsync(request);
            }
            
            post();

            /*app.MapGet("/getWebflowCollection", async (HttpContext httpContext) =>
            {
                using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, $"https://api.webflow.com/v2/collections/{id}/items");
                //using HttpResponseMessage response = await client.SendAsync(request);
                using HttpResponseMessage response = await client.GetAsync($"https://api.webflow.com/v2/collections/{id}/items");
                string content = await response.Content.ReadAsStringAsync();
                return content;
            })
            .WithName("GetWebflowCollection")
            .WithOpenApi().RequireCors("AllowAllOrigins");*/

            app.Run();
        }
    }
    class translate
    {
        public string text { get; set; }
        public string source_lang { get; set; }
        public string target_lang { get; set; }
    }
}
