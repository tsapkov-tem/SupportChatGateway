using SupportChatGateway.Server.Interfaces.Services.Contracts;

namespace SupportChatGateway.Server.Interfaces.Services
{
    public class LogService(LogGrpcService.LogGrpcServiceClient client) : ILogService
    {
        private readonly LogGrpcService.LogGrpcServiceClient _client = client;
        public async Task<LogsListResponse> GetLogsListAsync(SupportTypeRequest supportTypeRequest)
        {
            return await _client.GetLogsListAsync(supportTypeRequest);
        }
    }
}
