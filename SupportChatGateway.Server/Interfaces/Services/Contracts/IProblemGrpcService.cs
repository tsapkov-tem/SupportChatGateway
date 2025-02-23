namespace SupportChatGateway.Server.Interfaces.Services.Contracts
{
    public interface IProblemGrpcService
    {
        public Task<ProblemListResponse> GetProblemListAsync(SupportTypeRequest supportTypeRequest);
    }
}
