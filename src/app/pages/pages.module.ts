import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { InstanciasComponent } from "./instancias/instancias.component";
import { FirewallComponent } from "./firewall/firewall.component";
import { DomainsComponent } from "./domains/domains.component";
import { LoadBalanceComponent } from "./load-balance/load-balance.component";
import { ProjectComponent } from "./project/project.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { BalanceComponent } from "./balance/balance.component";
import { UsersComponent } from "./users/users.component";
import { NotificationComponent } from "./notification/notification.component";
import { PAGES_ROUTES } from "./pages.routes";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent,
    InstanciasComponent,
    FirewallComponent,
    DomainsComponent,
    LoadBalanceComponent,
    ProjectComponent,
    AuthenticationComponent,
    BalanceComponent,
    UsersComponent,
    NotificationComponent
  ],

  exports: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent,
    InstanciasComponent,
    FirewallComponent,
    DomainsComponent,
    LoadBalanceComponent,
    ProjectComponent,
    AuthenticationComponent,
    BalanceComponent,
    UsersComponent,
    NotificationComponent
  ],
  imports: [SharedModule, PAGES_ROUTES]
})
export class PagesModule {}
