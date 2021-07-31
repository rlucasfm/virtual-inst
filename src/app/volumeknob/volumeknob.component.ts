import { VolumeService } from './../services/volume.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-volumeknob',
  templateUrl: './volumeknob.component.html',
  styleUrls: ['./volumeknob.component.css']
})
export class VolumeknobComponent implements OnInit {

  @Input() volume_now? : any = 2
  @ViewChild('volume') volume: any

  constructor() { private volumeService: VolumeService }

  ngOnInit(): void {
  }



}
