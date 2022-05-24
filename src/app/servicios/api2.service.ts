import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpParamsOptions,
} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //URL_API ='https://api.nasa.gov/EPIC/api/natural?api_key=7c3Gl4jFWKv8p8XK0DLvLEW9ZDJGWMMlAhJljP3O';
  //URL_API = 'https://rickandmortyapi.com/api/character';
  URL_API2 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  constructor(private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get<any>(this.URL_API2).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
