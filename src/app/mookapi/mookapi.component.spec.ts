import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MookapiComponent } from './mookapi.component';

describe('MookapiComponent', () => {
  let component: MookapiComponent;
  let fixture: ComponentFixture<MookapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MookapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MookapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
