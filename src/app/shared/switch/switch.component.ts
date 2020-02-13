import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit, OnDestroy {
  @Input() topic: string;
  @Input() label: string;
  @Input() offLabel = 'Off';
  @Input() onLabel = 'On';
  @ViewChild('msglog', { static: true }) msglog: ElementRef;
  
  private switchOn = false;
  private stateLabel = '';
  private subscription: Subscription;
  private message: any;

  
  constructor(private _mqttService: MqttService) { 
    this.stateLabel = this.offLabel;
  }

  subscribeTopic(): void {
    this.subscription = this._mqttService.observe(this.topic).subscribe((message: IMqttMessage) => {
      this.message = message;
      this.processMessage();
    });
  }

  buttonClick(): void {
    if ((this.switchOn = !this.switchOn)) {
      this.stateLabel = this.onLabel;
    } else {
      this.stateLabel = this.offLabel;
    }
  }

  processMessage(): void {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
