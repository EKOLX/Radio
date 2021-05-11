import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel.model';
import { RadioService } from '../services/radio.service';
import { Utils } from '../utils/utils';

@Component({
  selector: 'channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.less']
})
export class ChannelListComponent implements OnInit {

  channels: Channel[] = [];
  showSpinner: boolean = false;

  private colors: string[] = ["#1abc9c", "#2ecc71", "#3498db", "#f1c40f", "#e67e22", "#e74c3c"];

  constructor(private radioService: RadioService) { }

  ngOnInit(): void {
    this.loadChannels();
  }

  onScroll() {
    this.loadChannels();
  }

  private loadChannels() {
    this.showSpinner = true;

    this.radioService.getChannels()
      .subscribe(result => {
        this.updateChannelsColor(result);

        if (this.channels.length == 0) {
          this.channels = result;
        } else {
          this.updateChannelsContent(result);
          this.channels = this.channels.concat(result);
        }

        this.showSpinner = false;
      });
  }

  private updateChannelsContent(channels: Channel[]) {
    let maxId = this.channels[this.channels.length - 1].id;

    for (let ch of channels) {
      ch.id = maxId++;
      ch.name = `FM ${ch.id}`;
    }
  }

  private updateChannelsColor(channels: Channel[]) {
    for (let ch of channels) {
      ch.color = this.getRandomColor();
    }
  }

  private getRandomColor(): string {
    return this.colors[Utils.getRandom(this.colors.length)];
  }

}
