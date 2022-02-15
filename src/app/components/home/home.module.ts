import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.component';
import { TrailerSectionModule } from '../trailer-section/trailer-section.module';
import { PokemonSectionModule } from '../pokemon-section/pokemon-section.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, TrailerSectionModule, PokemonSectionModule],
})
export class HomePageModule {}
