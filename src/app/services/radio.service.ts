import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private radioUrl = 'api/channels';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.radioUrl);
  }

  getChannelById(id: number): Observable<Channel> {
    const url = `${this.radioUrl}/${id}`;
    return this.http.get<Channel>(url);
  }

  private addChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(this.radioUrl, channel, this.httpOptions);
  }

}