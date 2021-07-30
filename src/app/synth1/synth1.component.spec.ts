import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Synth1Component } from './synth1.component';

describe('Synth1Component', () => {
  let component: Synth1Component;
  let fixture: ComponentFixture<Synth1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Synth1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Synth1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
