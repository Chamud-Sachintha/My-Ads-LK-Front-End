import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyappManageAdsComponent } from './myapp-manage-ads/myapp-manage-ads.component';
import { MyappStartPageComponent } from './myapp-start-page/myapp-start-page.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
