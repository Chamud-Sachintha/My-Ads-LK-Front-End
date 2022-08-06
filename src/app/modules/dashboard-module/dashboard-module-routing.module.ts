import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdPostComponent } from './create-ad-post/create-ad-post.component';
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
      },
      {
        path: 'create-ad',
        component: CreateAdPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
