import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { title } from 'process';
import { SwiperContainer } from 'swiper/element';
import { DateFormatPipe } from '@pipes/date-format.pipe';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatButtonModule,
    DateFormatPipe
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  @ViewChild('newSwiper') swiper!: ElementRef<SwiperContainer>;

  listNews = [
    {
      title: 'Contoh 1',
      tag: 'berita 1',
      datePost: new Date('2023-10-10'),
      author: 'Alif',
      image: 'assets/images/news-1.jpg'
    },
    {
      title: 'Contoh 2',
      tag: 'berita 2',
      datePost: new Date('2023-10-10'),
      author: 'Alif',
      image: 'assets/images/news-2.jpg'
    },
    {
      title: 'Contoh 3',
      tag: 'berita 3',
      datePost: new Date('2023-10-10'),
      author: 'Alif',
      image: 'assets/images/news-3.jpg'
    }
  ]

  onPrev() {
    this.swiper.nativeElement.swiper.slidePrev();
   }
  onNext() {
    this.swiper.nativeElement.swiper.slideNext();
   }
}
