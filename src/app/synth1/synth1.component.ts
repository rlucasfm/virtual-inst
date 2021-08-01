import { OscillatorService } from './../services/oscillator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synth1',
  templateUrl: './synth1.component.html',
  styleUrls: ['./synth1.component.css']
})

export class Synth1Component implements OnInit {

  constructor(private oscillatorService: OscillatorService) {}

  ngOnInit(): void {
  }

  play_audio(key: string): void {
    this.oscillatorService.play_note(key)
  }

}
