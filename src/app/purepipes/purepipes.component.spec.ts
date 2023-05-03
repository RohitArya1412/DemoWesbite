import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurepipesComponent } from './purepipes.component';

describe('PurepipesComponent', () => {
  let component: PurepipesComponent;
  let fixture: ComponentFixture<PurepipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurepipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurepipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
