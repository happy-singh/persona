import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { YourDataComponent }   from './your-data/your-data.component';
import { ApprovalsComponent }   from './approvals/approvals.component';
import { AppealsComponent }   from './appeals/appeals.component';
import { InformationComponent }   from './information/information.component';

import { CompanyComponent }   from './company/company.component';
import { DataServerComponent }   from './data-server/data-server.component';  

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'your-data', component: YourDataComponent },
  { path: 'your-data/company', component: CompanyComponent },
  { path: 'your-data/company/data-set', component: DataServerComponent },
  { path: 'approvals', component: ApprovalsComponent },
  { path: 'appeals', component: AppealsComponent },
  { path: 'information', component: InformationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}