using SupportChatGateway.Server.Extensions;
using SupportChatGateway.Server.Interfaces.Services;
using SupportChatGateway.Server.Interfaces.Services.Contracts;
using SupportChatGateway.Server.UseCases;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDataGrpcClient(builder.Configuration);
builder.Services.AddTransient<DataGrpcService>();
builder.Services.AddTransient<AggregatedResponseService>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
