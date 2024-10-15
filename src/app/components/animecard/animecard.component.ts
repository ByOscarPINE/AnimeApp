import { Component, Input, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-animecard',
  standalone: true,
  imports: [],
  templateUrl: './animecard.component.html',
  styleUrl: './animecard.component.css'
})
export class AnimecardComponent {
  private _favoritesService = inject(FavoritesService);
  @Input() animeInfo: any = {};


  addToFavorites(anime: any) {
    const res = this._favoritesService.addToFavorites(anime);
    
    if(res) {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: anime.title + ' ha sido agregado',
        toast: true,
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: anime.title + ' ha sido eliminado',
        toast: true,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  
  isFavorite(anime: any) {
    const resp = this._favoritesService.isFavorite(anime);
    if (resp) {
      return 'fa-solid fa-star';
    } else {
      return 'fa-regular fa-star';
    }
  }
}