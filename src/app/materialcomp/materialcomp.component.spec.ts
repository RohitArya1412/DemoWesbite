import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcompComponent } from './materialcomp.component';

describe('MaterialcompComponent', () => {
  let component: MaterialcompComponent;
  let fixture: ComponentFixture<MaterialcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
