import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpracticeComponent } from './formpractice.component';

describe('FormpracticeComponent', () => {
  let component: FormpracticeComponent;
  let fixture: ComponentFixture<FormpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
