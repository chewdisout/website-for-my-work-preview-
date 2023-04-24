using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectController : ControllerBase
{
    private readonly ILogger<ProjectController> _logger;

    public ProjectController(ILogger<ProjectController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetProjectDescription")]
    public IEnumerable<Project> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Project
        {
            ProjectId = 1,
            ProjectDescription = "Test description",
            ProjectName = "Test name"
        })
        .ToArray();
    }
}
