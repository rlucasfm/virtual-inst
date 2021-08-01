import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import { NOTES } from '../mock-notes';
import { VolumeService } from './volume.service';

@Injectable({
  providedIn: 'root'
})
export class TonesynthService {

  synth: any
  private gainNode: any;
  private notes = NOTES;

  constructor(private volumeService: VolumeService) {
    this.gainNode = new Tone.Gain().toDestination()
    this.synth = new Tone.Synth().connect(this.gainNode).toDestination()
  }

  public play_note(note_name: any, instrument?: any): void {
    let note = this.notes.find( note => note.note === note_name ) ?? { note: 'C2', freq: 0, octave: 0 }
    this.play(note.freq)
  }

  public play(note: any) {
    this.gainNode.gain.rampTo(this.volumeService.get_volume())
    this.synth.triggerAttackRelease(note, '8n')
  }
}
