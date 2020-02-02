import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { InstanciasComponent } from "./instancias/instancias.component";
import { FirewallComponent } from "./firewall/firewall.component";
import { LoadBalanceComponent } from "./load-balance/load-balance.component";
import { DomainsComponent } from "./domains/domains.component";
import { ProjectComponent } from "./project/project.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { BalanceComponent } from "./balance/balance.component";
import { UsersComponent } from "./users/users.component";
import { NotificationComponent } from "./notification/notification.component";
import { PagesComponent } from "./pages.component";
import { NopagefoundComponent } from "../nopagefound/nopagefound.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "instance", component: InstanciasComponent },
      { path: "firewall", component: FirewallComponent },
      { path: "loadbalance", component: LoadBalanceComponent },
      { path: "domains", component: DomainsComponent },
      { path: "project", component: ProjectComponent },
      { path: "profile", component: ProfileComponent },
      { path: "authentication", component: AuthenticationComponent },
      { path: "balance", component: BalanceComponent },
      { path: "users", component: UsersComponent },
      { path: "notification", component: NotificationComponent },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      { path: "**", component: NopagefoundComponent }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
