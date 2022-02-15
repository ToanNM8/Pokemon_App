import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerSectionComponent } from './trailer-section.component';

describe('TrailerSectionComponent', () => {
  let component: TrailerSectionComponent;
  let fixture: ComponentFixture<TrailerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
