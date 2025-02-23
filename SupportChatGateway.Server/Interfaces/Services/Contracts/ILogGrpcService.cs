namespace SupportChatGateway.Server.Interfaces.Services.Contracts
{
    public interface ILogGrpcService
    {
        public Task<LogsListResponse> GetLogsListAsync(SupportTypeRequest supportTypeRequest);
    }
}
