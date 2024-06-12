import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './theme/layout/guest/guest/guest.component';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './theme/admin-layout/admin-layout.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AdminLayoutModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
