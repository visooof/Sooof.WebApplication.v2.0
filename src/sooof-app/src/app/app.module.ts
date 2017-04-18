import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AboutComponent } from "./components/about/about.component";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { DealListComponent } from "./components/deal-list/deal-list.component";
import { DealDetailEditComponent } from "./components/deal-detail-edit/deal-detail-edit.component";
import { DealDetailViewComponent } from "./components/deal-detail-view/deal-detail-view.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AppRouting } from "./app.routing";

import { DealService } from "./services/deal.service";
import { AuthHttp } from "./auth.http";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HomeComponent,
    DealListComponent,
    DealDetailEditComponent,
    DealDetailViewComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers:
  [
    AuthHttp,
    AuthService,
    DealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
