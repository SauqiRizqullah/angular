import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '@components/portofolio-web/header/header.component';
import { BannerComponent } from '@components/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '@components/portofolio-web/header-menu/header-menu.component';
import { AboutUsComponent } from '@components/portofolio-web/about-us/about-us.component';
import { NewsComponent } from '@components/portofolio-web/news/news.component';
import { AchievementComponent } from '@components/portofolio-web/achievement/achievement.component';
import { privateDecrypt } from 'crypto';
import { TestimonialComponent } from '@components/portofolio-web/testimonial/testimonial.component';

@Component({
  selector: 'app-portofolio-web',
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent,
    TestimonialComponent
  ],
  templateUrl: './portofolio-web.component.html',
  styleUrl: './portofolio-web.component.css'
})
export class PortofolioWebComponent implements OnInit {

  bannerEl: any;
  headerEl: any;

  bannerIsScroll: boolean = false;

  constructor(
    private el: ElementRef
  ){}

  ngOnInit(): void {
      this.headerEl = this.el.nativeElement.querySelector('#headerId').offsetTop;
      this.bannerEl = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  // host listener dari window scroll

  @HostListener('window:scroll', [])
  onWindows(){
    this.bannerIsScroll = window.scrollY > this.headerEl
    // console.log('this.bannerIsScroll', this.bannerIsScroll)
    // console.log('this.headerEl', this.headerEl)
    // console.log('window.scrollY', window.scrollY)
    // this.aboutSecIsScroll = window.scrollY >
  }
}
