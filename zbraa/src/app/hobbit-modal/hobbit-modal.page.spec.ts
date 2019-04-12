import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbitModalPage } from './hobbit-modal.page';

describe('HobbitModalPage', () => {
  let component: HobbitModalPage;
  let fixture: ComponentFixture<HobbitModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbitModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbitModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
