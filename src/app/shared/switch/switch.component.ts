import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() path: string;
  @Input() label: string;
  
  switchOn = false;

  
  constructor() { }

  buttonClick(): void {
    console.log('path ' + this.path);
    this.switchOn = !this.switchOn;
  }

  ngOnInit() {
  }

}
