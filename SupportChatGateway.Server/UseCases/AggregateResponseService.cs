using SupportChatGateway.Server.Entities;
using SupportChatGateway.Server.Interfaces.Services;

namespace SupportChatGateway.Server.UseCases
{
    public class AggregatedResponseService(DataGrpcService dataGrpcService)
    {
        private readonly DataGrpcService _dataGrpcService = dataGrpcService;
        public async Task<AggregatedResponse> AggregateLogsListResponseAsync(string supportType)
        {
            var supportTypeRequest = new SupportTypeRequest() { SupportType = supportType };
            var response = await _dataGrpcService.GetLogsListAsync(supportTypeRequest);
            var aggregatedData = new AggregatedResponse
            {
                Data = response
            };
            return aggregatedData;
        }

        public async Task<AggregatedResponse> AggregateProblemsListResponseAsync(string supportType)
        {
            var supportTypeRequest = new SupportTypeRequest() { SupportType = supportType };
            var response = await _dataGrpcService.GetProblemListAsync(supportTypeRequest);
            var aggregatedData = new AggregatedResponse
            {
                Data = response
            };
            return aggregatedData;
        }
    }
}
