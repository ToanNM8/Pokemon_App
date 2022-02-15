import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { PokemonSectionDetailModule } from '../pokemon-section-detail/pokemon-section-detail.module';
import { PaginationModule } from '../pagination/pagination.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    PokemonSectionDetailModule,
    PaginationModule,
    FormsModule,
  ],
  exports: [PokemonComponent],
})
export class PokemonModule {}
