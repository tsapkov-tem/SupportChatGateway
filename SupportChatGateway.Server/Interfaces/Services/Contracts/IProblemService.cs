namespace SupportChatGateway.Server.Interfaces.Services.Contracts
{
    public interface IProblemService
    {
        public Task<ProblemListResponse> GetProblemListAsync(SupportTypeRequest supportTypeRequest);
    }
}
