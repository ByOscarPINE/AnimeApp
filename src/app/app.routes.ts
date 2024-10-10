import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {
        path: 'Home',
        component: HomeComponent,
    },
    {
        path: 'search',
        component: SearchComponent ,
    },
    {
        path: 'favorites',
        component: SearchComponent ,
    },
    {
        path: '**',
        redirectTo: 'Home',
    }
];
