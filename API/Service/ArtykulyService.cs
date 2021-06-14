using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API
{
    public class ArtykulyService
    {
        private static List<ArtykulDto> Artykuly = new List<ArtykulDto>
        {
            new ArtykulDto{id = 1, nazwa = "Odkurzacz", opis = "Do powierzchni szorstkich", cena = 22},
            new ArtykulDto{id = 2, nazwa = "Mop", opis = "Do powierzchni gładkich", cena = 32},
            new ArtykulDto{id = 3, nazwa = "Monitor", opis = "IPS", cena = 42},
            new ArtykulDto{id = 4, nazwa = "Telewizor", opis = "Amoled", cena = 12}
        };

        public IEnumerable<ArtykulDto> Pobierz(StronnicowanieDto stronnicowanie)
        {
            return Artykuly.Skip((stronnicowanie.Strona - 1) * stronnicowanie.Ilosc).Take(stronnicowanie.Ilosc);
        }

        public ArtykulDto ZnajdzPoId(int id)
        {
            return Artykuly.Find(a => a.id == id);
        }
    }
}
