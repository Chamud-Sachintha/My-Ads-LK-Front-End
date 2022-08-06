import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { MyappStartPageComponent } from './myapp-start-page/myapp-start-page.component';
import { MyappManageAdsComponent } from './myapp-manage-ads/myapp-manage-ads.component';
import { CreateAdPostComponent } from './create-ad-post/create-ad-post.component';
import { SeelAllAdsComponent } from './seel-all-ads/seel-all-ads.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MyappStartPageComponent,
    MyappManageAdsComponent,
    CreateAdPostComponent,
    SeelAllAdsComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class DashboardModuleModule { }
