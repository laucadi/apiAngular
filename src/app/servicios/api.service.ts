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
  URL_API = 'https://api.thecatapi.com/v1/breeds';

  constructor(private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get<any>(this.URL_API).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
