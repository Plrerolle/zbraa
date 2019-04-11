import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbitsesPage } from './hobbitses.page';

describe('HobbitsesPage', () => {
  let component: HobbitsesPage;
  let fixture: ComponentFixture<HobbitsesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbitsesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbitsesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
