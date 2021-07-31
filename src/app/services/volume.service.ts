import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {

  volume: number = 2;

  constructor() { }

  public set_volume(new_volume: number): void {
    this.volume = new_volume
  }

  public get_volume(): number {
    return this.volume
  }
}
