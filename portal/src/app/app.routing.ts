import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { DelegationFormComponent } from './delegation-form/delegation-form.component';
import { DelegateFormComponent } from './delegate-form/delegate-form.component';
import { DelegateListComponent } from './delegate-list/delegate-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from 'app/core/auth.guard';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'register',       component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'table-list',     component: TableListComponent, canActivate: [AuthGuard] },
    { path: 'typography',     component: TypographyComponent, canActivate: [AuthGuard] },
    { path: 'icons',          component: IconsComponent, canActivate: [AuthGuard] },
    { path: 'maps',           component: MapsComponent, canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent, canActivate: [AuthGuard] },
    { path: 'upgrade',        component: UpgradeComponent, canActivate: [AuthGuard] },
    { path: 'delegation-form',    component: DelegationFormComponent, canActivate: [AuthGuard] },
    { path: 'delegate-form',        component: DelegateFormComponent, canActivate: [AuthGuard] },
    { path: 'delegate-list',        component: DelegateListComponent, canActivate: [AuthGuard] },
    { path: '',               redirectTo: 'user-login', pathMatch: 'full' },
    { path: 'user-login', component: UserLoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
