import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JikanService } from '../../services/jikan.service';
import { AnimecardComponent } from "../../components/animecard/animecard.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, AnimecardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  busqueda: string = 'Doraemon';
  sinDatos = true;

  animes: any []= [];

  private _animeServ = inject(JikanService);

  constructor() { 
    this.buscarAnime();
    this.busqueda = '';
  }

  buscarAnime(){
    this._animeServ.searchAnime(this.busqueda).subscribe( (respuesta: any) => {
      console.log(respuesta);
        this.animes = respuesta.data;

        if(this.animes.length < 1){
          this.sinDatos = false;
        }
    });

  }

}
