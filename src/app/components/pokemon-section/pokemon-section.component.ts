import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Results } from 'src/app/models/common.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-section',
  templateUrl: './pokemon-section.component.html',
  styleUrls: ['./pokemon-section.component.scss'],
})
export class PokemonSectionComponent implements OnInit {
  @Input() pokemonList: Results[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateList(): void {
    this.router.navigateByUrl('list');
  }
}
