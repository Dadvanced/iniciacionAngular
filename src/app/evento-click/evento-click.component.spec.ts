/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventoClickComponent } from './evento-click.component';

describe('EventoClickComponent', () => {
  let component: EventoClickComponent;
  let fixture: ComponentFixture<EventoClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
