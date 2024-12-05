import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PromptingComponent } from './prompting/prompting.component';
import { OldMapsComponent } from './old-maps/old-maps.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import {Button} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    PromptingComponent,
    OldMapsComponent,
    ScenariosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    Button
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
