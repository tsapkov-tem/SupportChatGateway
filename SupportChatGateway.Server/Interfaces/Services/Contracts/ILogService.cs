namespace SupportChatGateway.Server.Interfaces.Services.Contracts
{
    public interface ILogService
    {
        public Task<LogsListResponse> GetLogsListAsync(SupportTypeRequest supportTypeRequest);
    }
}
