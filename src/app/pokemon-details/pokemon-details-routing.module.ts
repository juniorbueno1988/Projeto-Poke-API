import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsPage } from './pokemon-details.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailsPage, // aqui importa o standalone direto
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetailsPageRoutingModule {}
