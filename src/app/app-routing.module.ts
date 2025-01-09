import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminScenariosComponent} from './admin-scenarios/admin-scenarios.component';
import {AdminOldMapsComponent} from './admin-old-maps/admin-old-maps.component';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'admin-scenarios', component: AdminScenariosComponent},
  {path: 'admin-old-maps', component: AdminOldMapsComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
