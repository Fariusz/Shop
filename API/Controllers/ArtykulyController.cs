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
    }
}
