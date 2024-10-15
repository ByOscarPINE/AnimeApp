import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  myFavorites: any[] = [];

  constructor() { 
    this.getLocalFavorites;
  }

  get getLocalFavorites(){
    return this.myFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  addToFavorites(anime: any){

    const found = this.myFavorites.find( a => a.mal_id === anime.mal_id);

    if (found) {
      this.myFavorites = this.myFavorites.filter(a => a.mal_id !== anime.mal_id);
      localStorage.setItem('favorites', JSON.stringify(this.myFavorites));
      return false;
    } else {
      this.myFavorites.push(anime);
      localStorage.setItem('favorites', JSON.stringify(this.myFavorites));
      return true;
    }

  }

  isFavorite(anime: any){
    return !!this.myFavorites.find( a => a.mal_id === anime.mal_id);
  }
}
