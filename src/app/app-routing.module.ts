import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PromptingComponent} from './prompting/prompting.component';
import {ScenariosComponent} from './scenarios/scenarios.component';
import {OldMapsComponent} from './old-maps/old-maps.component';

const routes: Routes = [
  {path: '', redirectTo: '/prompting', pathMatch: 'full'},
  {path: 'prompting', component: PromptingComponent},
  {path: 'scenarios', component: ScenariosComponent},
  {path: 'old-maps', component: OldMapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
