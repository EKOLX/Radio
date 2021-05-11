import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
        <mat-toolbar>
        <button mat-icon-button>
            <mat-icon>menu</mat-icon>
        </button>
        <span class="title">{{title}}</span>
        <span class="fill-space"></span>
        <button mat-icon-button>
            <mat-icon>favorite</mat-icon>
        </button>
        </mat-toolbar>
        <router-outlet></router-outlet>`,
    styles: [
        '.title { padding-left: 20px; }'
    ]
})
export class AppComponent {
    title = "Radio LTBCM";
}