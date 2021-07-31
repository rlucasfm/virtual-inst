import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VolumeService } from '../services/volume.service';

@Component({
  selector: 'app-volumeknob',
  templateUrl: './volumeknob.component.html',
  styleUrls: ['./volumeknob.component.css']
})
export class VolumeknobComponent implements OnInit {

  @Input() volume_now? : any = 2
  @ViewChild('volume') volume: any

  constructor(private volumeService: VolumeService) { }

  ngOnInit(): void {
    this.volume_now = this.volumeService.get_volume()
  }

  change_volume(new_vol: number): void {
    this.volumeService.set_volume(new_vol)
  }

}
