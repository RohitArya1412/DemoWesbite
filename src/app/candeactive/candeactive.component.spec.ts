import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandeactiveComponent } from './candeactive.component';

describe('CandeactiveComponent', () => {
  let component: CandeactiveComponent;
  let fixture: ComponentFixture<CandeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandeactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
