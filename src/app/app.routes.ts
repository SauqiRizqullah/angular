import { Routes } from '@angular/router';
import { PortofolioWebComponent } from './template/portofolio-web/portofolio-web.component';
import { AdminComponent } from './template/admin/admin.component';

export const routes: Routes = [
    {
      // https://facebook.com/segment1/segment2
      path: '',
      component: PortofolioWebComponent // yang dipanggil nama class yang diexport typesrcipt
    },
    {
      path: 'admin',
      component: AdminComponent,
    }
]; // tempat ganti halaman

// localhost/admin/dashboard
