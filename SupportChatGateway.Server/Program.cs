using SupportChatGateway.Server;
using SupportChatGateway.Server.Extensions;
using SupportChatGateway.Server.Interfaces.Services;
using SupportChatGateway.Server.UseCases;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDataGrpcClient(builder.Configuration);
builder.Services.AddTransient<LogService>();
builder.Services.AddTransient<ProblemService>();
builder.Services.AddTransient<DataGrpcService>();
builder.Services.AddTransient<AggregatedResponseService>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

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
