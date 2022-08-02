import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebModuleRoutingModule } from './web-module-routing.module';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WebBannerComponent } from './web-banner/web-banner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { WebLatestAdsComponent } from './web-latest-ads/web-latest-ads.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FindAdsComponent } from './find-ads/find-ads.component';
import { ShowFilterAdsComponent } from './show-filter-ads/show-filter-ads.component';

@NgModule({
  declarations: [
    HomeComponent,
    WebBannerComponent,
    WebLatestAdsComponent,
    FindAdsComponent,
    ShowFilterAdsComponent
  ],
  imports: [
    CommonModule,
    WebModuleRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CarouselModule
  ]
})
export class WebModuleModule { }
