import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./modules/web-module/web-module.module").then((m) => m.WebModuleModule)
      }
    ]
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./modules/auth-module/auth-module.module").then((m) => m.AuthModuleModule)
      }
    ]
  },

  {
    path: 'app',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./modules/dashboard-module/dashboard-module.module").then((m) => m.DashboardModuleModule)
      }
    ],
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
