import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent implements OnInit, OnDestroy {
  @Input() pokemonName: string = '';
  @Input() imageId: string = '';
  destroyed$ = new Subject();
  pokemon: any;

  constructor(
    public activeModal: NgbActiveModal,
    private pokemonSer: PokemonService
  ) {}

  ngOnInit(): void {
    if (this.pokemonName) {
      this.pokemonSer
        .getPokemonDetail(this.pokemonName)
        .pipe(takeUntil(this.destroyed$))
        .subscribe((data) => {
          if (data) {
            this.pokemon = data;
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
