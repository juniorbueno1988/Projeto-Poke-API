import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  favoritos: Set<string> = new Set();
  limit = 7;          // Mostrar 6 por vez
  offset = 0;          // Começa do 0

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe(response => {
      const novosPokemons = response.results.map((pokemon: any) => {
        const id = this.getPokemonIdFromUrl(pokemon.url);
        return {
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
      });

      this.pokemons = [...this.pokemons, ...novosPokemons];
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

  verDetalhes(nome: string) {
    this.router.navigate(['/pokemon-details', nome]);
  }

  isFavorito(nome: string): boolean {
    return this.favoritos.has(nome);
  }

  toggleFavorito(nome: string, event: Event) {
    event.stopPropagation();
    if (this.favoritos.has(nome)) {
      this.favoritos.delete(nome);
    } else {
      this.favoritos.add(nome);
    }
  }
}
