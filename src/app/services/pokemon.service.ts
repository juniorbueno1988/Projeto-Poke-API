import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // Método para buscar lista de pokémons com paginação
  getPokemons(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  // Método para buscar detalhes de um Pokémon pelo nome ou id
  getPokemonDetails(nameOrId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${nameOrId}`);
  }
}
