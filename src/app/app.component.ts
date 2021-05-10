import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `<channel-list></channel-list>
               <router-outlet></router-outlet>`,
})
export class AppComponent { }