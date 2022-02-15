import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Results } from 'src/app/models/common.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  versionList: Results[] = [];
  generationList: Results[] = [];
  constructor(private pokemonSer: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonSer
      .getVersionPokemon()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.versionList = data.results;
        }
      });

    this.pokemonSer
      .getGenerationPokemon()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.generationList = data.results;
        }
      });
  }

  onHomePage(): void {
    this.router.navigateByUrl('');
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
