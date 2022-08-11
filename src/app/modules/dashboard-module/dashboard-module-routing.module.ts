import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { CreateAdPostComponent } from './create-ad-post/create-ad-post.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyappManageAdsComponent } from './myapp-manage-ads/myapp-manage-ads.component';
import { MyappStartPageComponent } from './myapp-start-page/myapp-start-page.component';
import { ReferelActivitiesComponent } from './referel-activities/referel-activities.component';
import { SeelAllAdsComponent } from './seel-all-ads/seel-all-ads.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'start-page',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'start-page',
        component: MyappStartPageComponent
      },
      {
        path: 'my-ads',
        component: MyappManageAdsComponent
      },
      {
        path: 'create-ad',
        component: CreateAdPostComponent
      },
      {
        path: 'search-all-ads',
        component: SeelAllAdsComponent
      },
      {
        path: 'advance-search',
        component: AdvanceSearchComponent
      },
      {
        path: 'refferals',
        component: ReferelActivitiesComponent
      },
      {
        path: 'my-requests',
        component: MyRequestsComponent
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
