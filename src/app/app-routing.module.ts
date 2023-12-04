import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { AdddataComponent } from './adddata/adddata.component';
import { HomeComponent } from './home/home.component';
import { ChangedataComponent } from './changedata/changedata.component';
const appRoutes: Routes = [
  { path: 'displaydata', component: DisplaydataComponent },
  { path: 'changedata', component: ChangedataComponent },
  { path: 'adddata', component: AdddataComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
