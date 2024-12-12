import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarVisitorComponent } from './nav-bar-visitor/nav-bar-visitor.component';
import { PromptingComponent } from './prompting/prompting.component';
import { OldMapsComponent } from './old-maps/old-maps.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import {Button} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { AdminScenariosComponent } from './admin-scenarios/admin-scenarios.component';
import { AdminOldMapsComponent } from './admin-old-maps/admin-old-maps.component';

// Factory function for ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarVisitorComponent,
    PromptingComponent,
    OldMapsComponent,
    ScenariosComponent,
    FooterComponent,
    HomeComponent,
    NavBarAdminComponent,
    AdminScenariosComponent,
    AdminOldMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    Button,
    CardModule,
    ImageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToggleButtonModule,
    FormsModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
