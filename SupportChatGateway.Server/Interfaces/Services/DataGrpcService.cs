using SupportChatGateway.Server.Interfaces.Services.Contracts;

namespace SupportChatGateway.Server.Interfaces.Services
{
    public class DataGrpcService(ChatService.ChatServiceClient client) : IDataGrpcService
    {
        private readonly ChatService.ChatServiceClient _client = client;

        public async Task<LogsListResponse> GetLogsListAsync(SupportTypeRequest supportTypeRequest)
        {
            return await _client.GetLogsListAsync(supportTypeRequest);
        }

        public async Task<ProblemListResponse> GetProblemListAsync(SupportTypeRequest supportTypeRequest)
        {
            return await _client.GetProblemListAsync(supportTypeRequest);
        }
    }
}
