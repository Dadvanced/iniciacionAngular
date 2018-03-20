/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgforClasesComponent } from './ngfor-clases.component';

describe('NgforClasesComponent', () => {
  let component: NgforClasesComponent;
  let fixture: ComponentFixture<NgforClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
