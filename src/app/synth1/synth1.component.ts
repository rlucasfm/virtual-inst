import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synth1',
  templateUrl: './synth1.component.html',
  styleUrls: ['./synth1.component.css']
})
export class Synth1Component implements OnInit {

  audioContext = new AudioContext();

  constructor() { }

  ngOnInit(): void {
  }



}
