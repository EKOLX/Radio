import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private radioUrl = 'api/channels';

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.radioUrl);
  }

  getChannelById(id: number): Observable<Channel> {
    const url = `${this.radioUrl}/${id}`;
    return this.http.get<Channel>(url);
  }

}