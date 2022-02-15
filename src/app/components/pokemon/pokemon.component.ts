import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Results } from 'src/app/models/common.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  currentPage = 1;
  itemPerPage = 20;
  pokemonName: string = '';
  pokemonList: Results[] = [];
  totalPages = 0;
  constructor(private pokemonSer: PokemonService) {}

  ngOnInit(): void {
    this.initList();
  }

  initList(): void {
    const prefix = `${this.pokemonName ? this.pokemonName : ''}?limit=${
      this.itemPerPage
    }&offset=${20 * (this.currentPage - 1)}`;
    this.pokemonSer
      .getPokemonsList(prefix)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.pokemonList = data.results;
          this.pokemonList = this.pokemonList.map((item) => ({
            name: item.name,
            url: item.url?.split('/')[6],
          }));
          this.totalPages = Math.ceil(data.count / this.itemPerPage);
        }
      });
  }

  onSearch(event: any): void {
    this.currentPage = 1;
    this.pokemonName = event.target.value;
    const prefix = `${this.pokemonName ? this.pokemonName : ''}?limit=${
      this.itemPerPage
    }&offset=${20 * (this.currentPage - 1)}`;
    this.pokemonSer
      .getPokemonsList(prefix)
      .pipe(debounceTime(1500), takeUntil(this.destroyed$))
      .subscribe(
        (data) => {
          if (data) {
            this.pokemonList = data.results;
            this.pokemonList = this.pokemonList.map((item) => ({
              name: item.name,
              url: item.url?.split('/')[6],
            }));
            console.log(this.pokemonList);

            this.totalPages = Math.ceil(data.count / this.itemPerPage);
          }
        },
        () => {
          this.pokemonList = [];
        }
      );
  }

  onChangeCurrentPage(currentPage: number): void {
    this.currentPage = currentPage;
    this.initList();
  }

  onChangeItemPerPage(itemPerPage: number): void {
    this.itemPerPage = itemPerPage;
    this.currentPage = 1;
    this.initList();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
