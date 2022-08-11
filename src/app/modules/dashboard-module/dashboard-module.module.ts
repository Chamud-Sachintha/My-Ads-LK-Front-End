import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { MyappStartPageComponent } from './myapp-start-page/myapp-start-page.component';
import { MyappManageAdsComponent } from './myapp-manage-ads/myapp-manage-ads.component';
import { CreateAdPostComponent } from './create-ad-post/create-ad-post.component';
import { SeelAllAdsComponent } from './seel-all-ads/seel-all-ads.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { ReferelActivitiesComponent } from './referel-activities/referel-activities.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

@NgModule({
  declarations: [
    MyappStartPageComponent,
    MyappManageAdsComponent,
    CreateAdPostComponent,
    SeelAllAdsComponent,
    AdvanceSearchComponent,
    ReferelActivitiesComponent,
    MyRequestsComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatRadioModule,
    MatIconModule,
    MatSliderModule
  ]
})
export class DashboardModuleModule { }
