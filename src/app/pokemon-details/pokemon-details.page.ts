import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, NgFor, CommonModule],
})
export class PokemonDetailsPage implements OnInit {
  pokemonName: string = '';
  imageUrl: string = '';
  height: number = 0;
  weight: number = 0;
  types: string[] = [];
  abilities: string[] = [];
  stats: any[] = [];
  sprites: string[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || '';
    if (this.pokemonName) {
      this.loadPokemon();
    }
  }

  loadPokemon() {
    this.pokemonService.getPokemonDetails(this.pokemonName).subscribe({
      next: (data: any) => {
        this.imageUrl = data.sprites.front_default;
        this.height = data.height;
        this.weight = data.weight;
        this.types = data.types.map((t: any) => t.type.name);
        this.abilities = data.abilities.map((a: any) => a.ability.name);
        this.stats = data.stats;
        this.sprites = [
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,
        ];
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao buscar Pokémon:', error);
        this.loading = false;
      },
    });
  }
}
