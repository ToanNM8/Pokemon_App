import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Results } from 'src/app/models/common.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  pokemonList: Results[] = [];
  constructor(private pokemonSer: PokemonService) {}

  ngOnInit(): void {
    this.pokemonSer
      .getPokemonsSection()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.pokemonList = data.results;
          this.pokemonList = this.pokemonList.map((item) => ({
            name: item.name,
            url: item.url?.split('/')[6],
          }));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
