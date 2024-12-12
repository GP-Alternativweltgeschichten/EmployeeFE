import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PromptingComponent} from './prompting/prompting.component';
import {ScenariosComponent} from './scenarios/scenarios.component';
import {OldMapsComponent} from './old-maps/old-maps.component';
import {HomeComponent} from './home/home.component';
import {AdminScenariosComponent} from './admin-scenarios/admin-scenarios.component';
import {AdminOldMapsComponent} from './admin-old-maps/admin-old-maps.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'prompting', component: PromptingComponent},
  {path: 'scenarios', component: ScenariosComponent},
  {path: 'old-maps', component: OldMapsComponent},
  {path: 'admin-scenarios', component: AdminScenariosComponent},
  {path: 'admin-old-maps', component: AdminOldMapsComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
