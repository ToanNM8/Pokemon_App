import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSectionDetailComponent } from './pokemon-section-detail.component';

describe('PokemonSectionDetailComponent', () => {
  let component: PokemonSectionDetailComponent;
  let fixture: ComponentFixture<PokemonSectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSectionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
