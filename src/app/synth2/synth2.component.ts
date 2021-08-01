import { Component, OnInit } from '@angular/core';
import { TonesynthService } from '../services/tonesynth.service';

@Component({
  selector: 'app-synth2',
  templateUrl: './synth2.component.html',
  styleUrls: ['./synth2.component.css']
})
export class Synth2Component implements OnInit {

  constructor(private tonesynthService: TonesynthService) { }

  ngOnInit(): void {
  }

  play_audio(key: string): void {
    this.tonesynthService.play_note(key)
  }

}
