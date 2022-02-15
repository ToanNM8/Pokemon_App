import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSectionDetailComponent } from './pokemon-section-detail.component';

@NgModule({
  declarations: [PokemonSectionDetailComponent],
  imports: [CommonModule],
  exports: [PokemonSectionDetailComponent],
})
export class PokemonSectionDetailModule {}
