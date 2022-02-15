import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGeneration } from '../models/common.model';

const URL = 'https://pokeapi.co/api/v2/';
const URL_Version = URL + 'version/';
const URL_Generation = URL + 'generation/';
const URL_List = URL + 'pokemon/';

@Injectable({
  providedIn: 'root',
})

export class PokemonService {
  constructor(private http: HttpClient) {}

  getVersionPokemon(): Observable<ResponseGeneration> {
    return this.http.get<ResponseGeneration>(URL_Version);
  }

  getGenerationPokemon(): Observable<ResponseGeneration> {
    return this.http.get<ResponseGeneration>(URL_Generation);
  }

  getPokemonsSection(): Observable<ResponseGeneration> {
    return this.http.get<ResponseGeneration>(URL_List + '?limit=10');
  }

  getPokemonsList(prefix: string): Observable<ResponseGeneration> {
    return this.http.get<ResponseGeneration>(URL_List + prefix);
  }

  getPokemonDetail(pokemonName: string): Observable<any> {
    return this.http.get<any>(URL_List + `${pokemonName}`);
  }
}
