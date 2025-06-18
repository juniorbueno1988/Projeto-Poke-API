import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, NgFor, CommonModule],
})
export class PokemonDetailsPage implements OnInit {
  pokemonName: string = '';
  pokemonData: any;

  imageUrl: string = '';
  height: number = 0;
  weight: number = 0;
  types: string[] = [];
  abilities: string[] = [];
  stats: any[] = [];
  sprites: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || '';
    if (this.pokemonName) {
      this.loadPokemon();
    }
  }

  loadPokemon() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`).subscribe(
      (data: any) => {
        this.pokemonData = data;
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
      },
      (error) => {
        console.error('Erro ao buscar Pokémon', error);
      }
    );
  }
}
