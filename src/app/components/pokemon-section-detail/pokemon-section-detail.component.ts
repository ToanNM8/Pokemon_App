import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Results } from 'src/app/models/common.model';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-section-detail',
  templateUrl: './pokemon-section-detail.component.html',
  styleUrls: ['./pokemon-section-detail.component.scss'],
})
export class PokemonSectionDetailComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  @Input() pokemonList: Results[] = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal(item: any) {
    const modalRef = this.modalService.open(DetailPokemonComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.imageId = item.url;
    modalRef.componentInstance.pokemonName = item.name;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
