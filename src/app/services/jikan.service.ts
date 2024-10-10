import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const URL_API = 'https://api.jikan.moe/v4/';

@Injectable({
  providedIn: 'root'
})
export class JikanService {
  private _http = inject(HttpClient) ;
  constructor() { 
  }

  getTopAnimes(){
    return this._http.get(URL_API + 'top/anime')
  }

  searchAnime(busqueda: string){
    return this._http.get(URL_API + 'anime?q=' + busqueda)
  }
}
