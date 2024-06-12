import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbNavModule, NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { NavLeftComponent } from './nav-bar/nav-left/nav-left.component'; 
import { NavRightComponent } from './nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './navigation/navigation.component'; 
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardComponent } from './components/card/card.component';
import { NavContentComponent } from './navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './navigation/nav-content/nav-group/nav-group.component';
import { NavItemsComponent } from './navigation/nav-content/nav-items/nav-items.component';
import { NavCollapseComponent } from './navigation/nav-content/nav-collapse/nav-collapse.component';
@NgModule({
  declarations: [
    NavLeftComponent, 
    NavRightComponent, 
    NavigationComponent,
    NavBarComponent, 
    BreadcrumbComponent,
    SpinnerComponent,
    CardComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemsComponent,
    NavCollapseComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    NgbCollapseModule
  ],
  exports: [
    NavLeftComponent, 
    NavRightComponent, 
    NavigationComponent,
    NavBarComponent, 
    BreadcrumbComponent,
    SpinnerComponent,
    CardComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemsComponent,
    NavCollapseComponent
  ]
})
export class AdminLayoutModule { }
