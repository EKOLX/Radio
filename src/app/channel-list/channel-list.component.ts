import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel.model';
import { RadioService } from '../services/radio.service';

@Component({
  selector: 'channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.less']
})
export class ChannelListComponent implements OnInit {

  channels$: Observable<Channel[]> | undefined;

  constructor(private radioService: RadioService) { }

  ngOnInit(): void {
    this.loadChannels();
  }

  onScrollDown() {
    this.loadChannels();
    console.log("scrolled");
  }

  private loadChannels() {
    this.channels$ = this.radioService.getChannels();
  }

}
