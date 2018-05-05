import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { YourDataComponent } from './your-data/your-data.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { AppealsComponent } from './appeals/appeals.component';
import { InformationComponent } from './information/information.component';
import { MainComponent } from './main/main.component';
import { CompanyComponent } from './company/company.component';
import { DataServerComponent } from './data-server/data-server.component';
import { MaterialModule } from '../core/module/material.module';


@NgModule({
  declarations: [
    AppComponent,
    YourDataComponent,
    ApprovalsComponent,
    AppealsComponent,
    InformationComponent,
    MainComponent,
    CompanyComponent,
    DataServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
