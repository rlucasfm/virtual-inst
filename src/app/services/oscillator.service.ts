import { NOTES } from './../mock-notes';
import { Notes } from '../notes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OscillatorService {

  private notes = NOTES;
  private audioContext = new AudioContext()
  private gainNode = this.audioContext.createGain()

  constructor() { }

  public play_note(note_name: any, gain: number): void {
    let note = this.notes.find( note => note.note === note_name ) ?? { note: 'null', freq: 0, octave: 0 }
    this.play(note.freq, gain)
  }

  private play(freq: number, gain: number): void {
    const oscillator = this.audioContext.createOscillator()
    this.gainNode.gain.value = gain
    oscillator.connect(this.gainNode)
    this.gainNode.connect(this.audioContext.destination)
    oscillator.type = 'sine'
    oscillator.frequency.value = freq
    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 1.5)
  }
}
