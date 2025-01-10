import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScenariosComponent} from './scenarios/scenarios.component';
import {OldMapsComponent} from './old-maps/old-maps.component';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'scenarios', component: ScenariosComponent},
  {path: 'old-maps', component: OldMapsComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
