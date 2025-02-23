using SupportChatGateway.Server.Constants;

namespace SupportChatGateway.Server.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static void AddDataGrpcClient(this IServiceCollection services, IConfiguration configuration)
        {
            var connection = configuration.GetSection(ConfigurationKeyConstants.GRPC_DATA_SERVER_URL).Value;

            if (string.IsNullOrEmpty(connection))
                throw new Exception("Grpc connection url is undefined.");

            services.AddGrpcClient<ChatService.ChatServiceClient>(o =>
            {
                o.Address = new Uri(connection);
            });
        }
    }
}
