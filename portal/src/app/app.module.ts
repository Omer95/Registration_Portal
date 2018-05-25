import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { RegisterComponent } from './register/register.component';
import { DelegationFormComponent } from './delegation-form/delegation-form.component';
import { DelegateFormComponent } from './delegate-form/delegate-form.component';
import { DelegateListComponent } from './delegate-list/delegate-list.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserLoginComponent } from './user-login/user-login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './core/auth.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { AuthGuard } from './core/auth.guard';
import { ReadService } from './services/read.service';
import { CreateService } from './services/create.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RegisterComponent,
    DelegationFormComponent,
    DelegateFormComponent,
    DelegateListComponent,
    UserLoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard, CreateService, ReadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
