import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAdsComponent } from './find-ads/find-ads.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'find-ads',
        component: FindAdsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebModuleRoutingModule { }
