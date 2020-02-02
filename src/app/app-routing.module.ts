import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { InstanciasComponent } from "./pages/instancias/instancias.component";
import { FirewallComponent } from "./pages/firewall/firewall.component";
import { LoadBalanceComponent } from "./pages/load-balance/load-balance.component";
import { DomainsComponent } from "./pages/domains/domains.component";
import { ProjectComponent } from "./pages/project/project.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AuthenticationComponent } from "./pages/authentication/authentication.component";
import { BalanceComponent } from "./pages/balance/balance.component";
import { UsersComponent } from "./pages/users/users.component";
import { NotificationComponent } from "./pages/notification/notification.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { LoginComponent } from "./login/login.component";
import { PagesComponent } from "./pages/pages.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
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
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
