/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiSaludoComponent } from './mi-saludo.component';

describe('MiSaludoComponent', () => {
  let component: MiSaludoComponent;
  let fixture: ComponentFixture<MiSaludoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiSaludoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSaludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
