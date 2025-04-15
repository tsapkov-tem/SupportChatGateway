using SupportChatGateway.Server.Constants;
using SupportChatGateway.Server.Interfaces.Services.Contracts;

namespace SupportChatGateway.Server.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static void AddDataGrpcClient(this IServiceCollection services, IConfiguration configuration)
        {
            var connection = configuration.GetSection(ConfigurationKeyConstants.GRPC_DATA_SERVER_URL).Value;

            if (string.IsNullOrEmpty(connection))
                throw new Exception("Grpc connection url is undefined.");

            services.AddGrpcClient<LogGrpcService.LogGrpcServiceClient>(o =>
            {
                o.Address = new Uri(connection);
            });
            services.AddGrpcClient<ProblemGrpcService.ProblemGrpcServiceClient>(o =>
            {
                o.Address = new Uri(connection);
            });
        }
    }
}
