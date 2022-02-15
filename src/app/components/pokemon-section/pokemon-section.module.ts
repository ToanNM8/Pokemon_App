import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSectionComponent } from './pokemon-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonSectionDetailModule } from '../pokemon-section-detail/pokemon-section-detail.module';

@NgModule({
  declarations: [PokemonSectionComponent],
  imports: [CommonModule, NgbModule, PokemonSectionDetailModule],
  exports: [PokemonSectionComponent],
})
export class PokemonSectionModule {}
