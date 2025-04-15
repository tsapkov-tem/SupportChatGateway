using SupportChatGateway.Server.Interfaces.Services.Contracts;

namespace SupportChatGateway.Server.Interfaces.Services
{
    public class ProblemService(ProblemGrpcService.ProblemGrpcServiceClient client) : IProblemService
    {
        private readonly ProblemGrpcService.ProblemGrpcServiceClient _client = client;
        public async Task<ProblemListResponse> GetProblemListAsync(SupportTypeRequest supportTypeRequest)
        {
            return await _client.GetProblemListAsync(supportTypeRequest);
        }
    }
}
