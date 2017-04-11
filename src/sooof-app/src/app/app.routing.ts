import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    redirectTo: ""
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "item/:id",
    component: ItemDetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const AppRoutingProviders: any[] = [
];
export const AppRouting: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);