import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../models/song.model';
import { Utils } from '../utils/utils';

@Component({
  selector: 'channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.less']
})
export class ChannelDetailComponent implements OnInit, OnDestroy {

  channelId: number = 0;
  song: Song = new Song();
  isPlaying: boolean = false;

  private audio = new Audio();

  tracks = [
    { singer: "T. Schürger", name: "Song 1", music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://material.angular.io/assets/img/examples/shiba1.jpg" },
    { singer: "T. Schürger", name: "Song 2", music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://material.angular.io/assets/img/examples/shiba1.jpg" },
    { singer: "T. Schürger", name: "Song 3", music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://material.angular.io/assets/img/examples/shiba1.jpg" },
    { singer: "T. Schürger", name: "Song 4", music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://material.angular.io/assets/img/examples/shiba1.jpg" },
    { singer: "T. Schürger", name: "Song 5", music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", cover: "https://material.angular.io/assets/img/examples/shiba1.jpg" },
    { singer: "T. Schürger", name: "Song 6", music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", cover: "https://material.angular.io/assets/img/examples/shiba1.jpg" }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.channelId = +(this.route.snapshot.paramMap.get("id") ?? "");
    this.song = this.getRandomSong();
  }

  ngOnInit(): void {
    this.stopMusic();
  }

  play() {
    this.playMusic();
  }

  private playMusic() {
    this.audio.src = this.song.music;
    this.audio.load();
    this.audio.onended = _ => this.playNext();

    let playPromise = this.audio.play();
    playPromise.then(_ => this.isPlaying = true);
  }

  private stopMusic() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  private playNext() {
    this.stopMusic();
    this.song = this.getRandomSong();
    this.playMusic();
  }

  private getRandomSong(): Song {
    return this.tracks[Utils.getRandom(this.tracks.length)];
  }

  ngOnDestroy() {
    this.stopMusic();
  }

}
