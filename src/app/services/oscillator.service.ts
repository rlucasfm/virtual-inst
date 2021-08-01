import { NOTES } from './../mock-notes';
import { Notes } from '../notes';
import { Injectable } from '@angular/core';
import { VolumeService } from './volume.service';

@Injectable({
  providedIn: 'root'
})
export class OscillatorService {

  private notes = NOTES;
  private audioContext = new AudioContext()
  private gainNode = this.audioContext.createGain()
  private reverbNode = this.audioContext.createConvolver()

  constructor(private volumeService: VolumeService) { }

  public play_note(note_name: any, instrument: any = 'sine'): void {
    let note = this.notes.find( note => note.note === note_name ) ?? { note: 'null', freq: 0, octave: 0 }
    this.play(note.freq, this.volumeService.get_volume(), instrument)
  }

  private play(freq: number, gain: number, instrument: any): void {
    const oscillator = this.audioContext.createOscillator()
    this.gainNode.gain.value = gain
    oscillator.connect(this.gainNode)
    this.gainNode.connect(this.audioContext.destination)
    oscillator.type = instrument
    oscillator.frequency.value = freq
    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 1.5)
  }
}
