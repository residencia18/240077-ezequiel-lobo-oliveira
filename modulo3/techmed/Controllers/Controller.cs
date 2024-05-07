
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace techmed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            });
        }

        [HttpGet("GetMedicos", Name = "GetMedicos")]
        public IEnumerable<Medico> GetMedicos()
        {
            return Enumerable.Range(1, 3).Select(index => new Medico
            {
                MedicoId = index,
                Name = $"Dr. {Summaries[index % Summaries.Length]}"
            }).ToArray();
        }

        [HttpGet("GetClientes", Name = "GetClientes")]
        public IEnumerable<Cliente> GetClientes()
        {
            return Enumerable.Range(1, 3).Select(index => new Cliente
            {
                ClienteId = index,
                Name = $"Client {index}"
            }).ToArray();
        }

        [HttpPost("InsertMedico", Name = "InsertMedico")]
        public IActionResult InsertMedico([FromBody] Medico newMedico)
        {
            if (newMedico != null)
            {
                return Ok($"Inserted new Medico: {newMedico.Name}");
            }
            else
            {
                return BadRequest("Invalid Medico data");
            }
        }

        [HttpPut("UpdateMedico/{medicoId}", Name = "UpdateMedico")]
        public IActionResult UpdateMedico(int medicoId, [FromBody] Medico updatedMedico)
        {
            if (updatedMedico != null && medicoId > 0)
            {
                return Ok($"Updated Medico with ID {medicoId}");
            }
            else
            {
                return BadRequest("Invalid Medico data or ID");
            }
        }

        [HttpPost("InsertCliente", Name = "InsertCliente")]
        public IActionResult InsertCliente([FromBody] Cliente newCliente)
        {
            if (newCliente != null)
            {
                return Ok($"Inserted new Cliente: {newCliente.Name}");
            }
            else
            {
                return BadRequest("Invalid Cliente data");
            }
        }

        [HttpPut("UpdateCliente/{clienteId}", Name = "UpdateCliente")]
        public IActionResult UpdateCliente(int clienteId, [FromBody] Cliente updatedCliente)
        {
            if (updatedCliente != null && clienteId > 0)
            {
                return Ok($"Updated Cliente with ID {clienteId}");
            }
            else
            {
                return BadRequest("Invalid Cliente data or ID");
            }
        }

        [HttpDelete("DeleteMedico/{medicoId}", Name = "DeleteMedico")]
        public IActionResult DeleteMedico(int medicoId)
        {
            if (medicoId > 0)
            {
                return Ok($"Deleted Medico with ID {medicoId}");
            }
            else
            {
                return NotFound($"Medico with ID {medicoId} not found");
            }
        }

        [HttpDelete("DeleteCliente/{clienteId}", Name = "DeleteCliente")]
        public IActionResult DeleteCliente(int clienteId)
        {
            if (clienteId > 0)
            {
                return Ok($"Deleted Cliente with ID {clienteId}");
            }
            else
            {
                return NotFound($"Cliente with ID {clienteId} not found");
            }
        }
    }
}
