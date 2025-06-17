import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  
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

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe(response => {
      const newPokemons = response.results.map((pokemon: any) => {
        const id = this.getPokemonIdFromUrl(pokemon.url);
        return {
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
      });

      this.pokemons = [...this.pokemons, ...newPokemons];
    });
  }

  getPokemonIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  carregarMais() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  verDetalhes(pokemonName: string) {
    this.router.navigate(['/pokemon-details', pokemonName]);
  }
}
