import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InstanciasComponent } from './pages/instancias/instancias.component';
import { FirewallComponent } from './pages/firewall/firewall.component';
import { DomainsComponent } from './pages/domains/domains.component';
import { LoadBalanceComponent } from './pages/load-balance/load-balance.component';
import { ProjectComponent } from './pages/project/project.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { UsersComponent } from './pages/users/users.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ProfileComponent,
    InstanciasComponent,
    FirewallComponent,
    DomainsComponent,
    LoadBalanceComponent,
    ProjectComponent,
    AuthenticationComponent,
    BalanceComponent,
    UsersComponent,
    NotificationComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
