import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Synth2Component } from './synth2.component';

describe('Synth2Component', () => {
  let component: Synth2Component;
  let fixture: ComponentFixture<Synth2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Synth2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Synth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
