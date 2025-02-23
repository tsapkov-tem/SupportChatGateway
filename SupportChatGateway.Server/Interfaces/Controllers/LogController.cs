using Microsoft.AspNetCore.Mvc;
using SupportChatGateway.Server.Entities;
using SupportChatGateway.Server.UseCases;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SupportChatGateway.Server.Interfaces.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogController(AggregatedResponseService aggregatedResponseService) : ControllerBase
    {
        private readonly AggregatedResponseService _aggregatedResponseService = aggregatedResponseService;

        [HttpGet]
        public async Task<IActionResult> GetLog()
        {
            try
            {
                var aggregatedResponse = await _aggregatedResponseService.AggregateLogsListResponseAsync("temp");

                return Ok(aggregatedResponse);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
