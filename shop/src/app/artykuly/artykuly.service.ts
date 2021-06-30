import { Injectable } from '@angular/core';
import { Artykul } from 'models/artykul';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

export interface Stronnicowanie{
  strona: number;
  ilosc: number;
}

@Injectable({
  providedIn: 'root'
})

export class ArtykulyService {
  private aktualizacja: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  pobierzArtykuly(stronnicowanie: Stronnicowanie): Observable<Artykul[]> {
    return this.http.get<Artykul[]>('https://localhost:44319/api/Artykuly', {
      params: {
        strona: stronnicowanie.strona.toString(),
        ilosc: stronnicowanie.ilosc.toString()
      }
    });
  }

  pobierzArtykul(id: number ): Observable<Artykul>{
    return this.http.get<Artykul>('https://localhost:44319/api/Artykuly' + id);
  }

  zmienArtykul(id: number, artykul: Artykul): Observable<Artykul> {
    return this.http.put<Artykul>('https://localhost:44319/api/Artykuly' + id, artykul)
      .pipe(
        tap(res => this.aktualizacja.next('Dokonano edycji artykulu'))
      );
  }
  dodajArtykul(artykul: Artykul): Observable<Artykul> {
    return this.http.post<Artykul>('https://localhost:44319/api/Artykuly', artykul)
      .pipe(
        tap(res => this.aktualizacja.next('Dodano nowy obiekt'))
      );
  }
}

