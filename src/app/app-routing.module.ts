import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';

const routes: Routes = [
  { path: 'channel-list', component: ChannelListComponent },
  { path: 'channel-detail/:id', component: ChannelDetailComponent },
  { path: '', redirectTo: '/channel-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/channel-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
