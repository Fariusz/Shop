using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtykulyController : ControllerBase
    {

        private readonly ArtykulyService _artykulyService;

        public ArtykulyController(ArtykulyService artykulyService)
        {
            _artykulyService = artykulyService;
        }

        [HttpGet]
        public IEnumerable<ArtykulDto> Pobierz([FromQuery] StronnicowanieDto stronnicowanie)
        {
            return _artykulyService.Pobierz(stronnicowanie);
        }

        [HttpGet("{id}")]
        public ArtykulDto Pobierz(int id)
        {
            return _artykulyService.ZnajdzPoId(id);
        }

        [HttpPost]
        public ArtykulDto Dodaj([FromBody] ArtykulDto dto)
        {
            return _artykulyService.Dodaj(dto);
        }

        [HttpPut("{id}")]
        public ArtykulDto Edytuj(int id, [FromBody] ArtykulDto dto)
        {
            return _artykulyService.Edytuj(id, dto);
        }
    }
}
