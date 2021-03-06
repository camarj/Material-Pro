import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Rutas
import { AppRoutingModule } from "./app-routing.module";

//Modulos
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
