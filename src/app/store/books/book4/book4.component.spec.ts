import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book4Component } from './book4.component';

describe('Book4Component', () => {
  let component: Book4Component;
  let fixture: ComponentFixture<Book4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Book4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Book4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
