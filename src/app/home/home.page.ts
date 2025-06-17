import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  limit = 20;
  offset = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe(response => {
      this.pokemons = response.results.map((pokemon: any, index: number) => {
        const id = this.offset + index + 1;
        return {
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
      });
    });
  }
}
