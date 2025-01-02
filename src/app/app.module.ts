import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarVisitorComponent } from './visitor/nav-bar-visitor/nav-bar-visitor.component';
import { PromptingComponent } from './visitor/prompting/prompting.component';
import { OldMapsComponent } from './visitor/old-maps/old-maps.component';
import { ScenariosComponent } from './visitor/scenarios/scenarios.component';
import {MenubarModule} from 'primeng/menubar';
import { ResetComponent } from './visitor/reset/reset.component';
import {Button} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavBarAdminComponent } from './admin/nav-bar-admin/nav-bar-admin.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { AdminScenariosComponent } from './admin/admin-scenarios/admin-scenarios.component';
import { AdminOldMapsComponent } from './admin/admin-old-maps/admin-old-maps.component';
import { OldMapDialogComponent } from './admin/old-map-dialog/old-map-dialog.component';
import { ScenarioDialogComponent } from './admin/scenario-dialog/scenario-dialog.component';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CalendarModule} from 'primeng/calendar';
import { ErrorComponent } from './error/error.component';

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
    ResetComponent,
    HomeComponent,
    NavBarAdminComponent,
    AdminScenariosComponent,
    AdminOldMapsComponent,
    OldMapDialogComponent,
    ScenarioDialogComponent,
    ErrorComponent
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
    SelectButtonModule,
    DialogModule,
    FileUploadModule,
    TableModule,
    ProgressSpinnerModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
