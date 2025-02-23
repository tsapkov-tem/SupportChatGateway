using Microsoft.AspNetCore.Mvc;
using SupportChatGateway.Server.UseCases;

namespace SupportChatGateway.Server.Interfaces.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProblemsController(AggregatedResponseService aggregatedResponseService) : ControllerBase
    {
        private readonly AggregatedResponseService _aggregatedResponseService = aggregatedResponseService;

        [HttpGet]
        public async Task<IActionResult> GetProblem()
        {
            try
            {
                var aggregatedResponse = await _aggregatedResponseService.AggregateProblemsListResponseAsync("temp");

                return Ok(aggregatedResponse);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
