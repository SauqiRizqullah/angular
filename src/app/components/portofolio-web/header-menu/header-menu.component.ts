import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-menu',
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  @Input() bannerIsScroll: boolean = false;

  gotoDiv(page: string){

  }

}
