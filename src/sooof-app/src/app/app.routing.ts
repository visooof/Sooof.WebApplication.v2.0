import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { DealDetailEditComponent } from "./components/deal-detail-edit/deal-detail-edit.component";
import { DealDetailViewComponent } from "./components/deal-detail-view/deal-detail-view.component";
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
    path: "deal/edit/:id",
    component: DealDetailEditComponent
  },
  {
    path: "deal/view/:id",
    component: DealDetailViewComponent
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