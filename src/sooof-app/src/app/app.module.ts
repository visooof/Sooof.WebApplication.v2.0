import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AboutComponent } from "./components/about/about.component";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { LoginComponent } from "./components/login/login.component"; import
{ PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"; import
{ AppRouting } from "./app.routing";
import { ItemService } from "./services/item.service";

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HomeComponent,
    ItemListComponent,
    ItemDetailComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
