import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
