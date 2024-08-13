import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './item.service';
import { ApiComponent } from './api/api.component';
import { NotFoundComponent } from './not-found/not-found.component';  // Import the service

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ApiComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Add FormsModule to imports
  ],
  providers: [ItemService],  // Add ItemService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
