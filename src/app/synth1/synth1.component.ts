import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-synth1',
  templateUrl: './synth1.component.html',
  styleUrls: ['./synth1.component.css']
})

export class Synth1Component implements OnInit {

  audioContext = new AudioContext();

  @ViewChild('audiof') audio: ElementRef<HTMLAudioElement> | undefined

  constructor() {

  }

  ngOnInit(): void {

  }

  play_f(key: string): void {
    console.log(this.audio)
  }

}
