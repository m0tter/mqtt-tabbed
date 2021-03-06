import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HouseComponent } from './zones/house/house.component';
import { OutsideComponent } from './zones/outside/outside.component';
import { SwitchComponent } from './shared/switch/switch.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'mqtt.lh',
  port: 9001,
  path: '/mqtt'
}

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    OutsideComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
