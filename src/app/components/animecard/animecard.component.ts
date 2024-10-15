import { Component, Input, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

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
    this._favoritesService.addToFavorites(anime);
  }
  
}
