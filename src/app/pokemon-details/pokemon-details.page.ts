import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf], 
})
export class PokemonDetailsPage implements OnInit {
  pokemonName: string = '';
  pokemonData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || '';
    if (this.pokemonName) {
      this.loadPokemon();
    }
  }

  loadPokemon() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`).subscribe(
      (data) => {
        this.pokemonData = data;
      },
      (error) => {
        console.error('Erro ao buscar Pokémon', error);
      }
    );
  }
}
