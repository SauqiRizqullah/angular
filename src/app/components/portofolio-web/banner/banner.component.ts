import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
    MatButtonModule,
    NgFor
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent {
  listImages = [
    "assets/images/bg-1.jpg",
    "assets/images/bg-2.jpg",
    "assets/images/bg-3.jpg"
  ]
}
