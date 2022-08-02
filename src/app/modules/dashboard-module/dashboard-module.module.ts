import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { MyappStartPageComponent } from './myapp-start-page/myapp-start-page.component';
import { MyappManageAdsComponent } from './myapp-manage-ads/myapp-manage-ads.component';


@NgModule({
  declarations: [
    MyappStartPageComponent,
    MyappManageAdsComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule
  ]
})
export class DashboardModuleModule { }
