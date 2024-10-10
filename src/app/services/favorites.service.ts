import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  myFavorites: any[] = [];

  constructor() { 
    this.getLocalFavorites();
  }

  getLocalFavorites(){
    return this.myFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  addToFavorites(anime: any){
    this.myFavorites.push(anime);
    localStorage.setItem('favorites', JSON.stringify(this.myFavorites));
  }
}
