using SupportChatGateway.Server.Interfaces.Services.Contracts;

namespace SupportChatGateway.Server.Interfaces.Services
{
    public class DataGrpcService(ProblemService problemService, LogService logService) : IDataGrpcService
    {
        private readonly ProblemService _problemService = problemService;
        private readonly LogService _logService = logService;

        public async Task<LogsListResponse> GetLogsListAsync(SupportTypeRequest supportTypeRequest)
        {
            return await _logService.GetLogsListAsync(supportTypeRequest);
        }

        public async Task<ProblemListResponse> GetProblemListAsync(SupportTypeRequest supportTypeRequest)
        {
            return await _problemService.GetProblemListAsync(supportTypeRequest);
        }
    }
}
