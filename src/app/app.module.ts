import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppComponent } from './app.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';

import { InMemoryFakeDataService } from './services/in-memory-fake-data.service';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    ChannelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryFakeDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    InfiniteScrollModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
