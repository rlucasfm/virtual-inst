import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeknobComponent } from './volumeknob.component';

describe('VolumeknobComponent', () => {
  let component: VolumeknobComponent;
  let fixture: ComponentFixture<VolumeknobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeknobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeknobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
