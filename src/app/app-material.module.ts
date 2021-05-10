import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ]
})
export class AppMaterialModule { }
