import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MenubarModule} from 'primeng/menubar';
import {Button} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { OldMapsComponent } from './old-maps/old-maps.component';
import { OldMapDialogComponent } from './old-map-dialog/old-map-dialog.component';
import { ScenarioDialogComponent } from './scenario-dialog/scenario-dialog.component';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CalendarModule} from 'primeng/calendar';
import { ErrorComponent } from './error/error.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from "primeng/inputtext";
import {OverlayPanelModule} from 'primeng/overlaypanel';

// Factory function for ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NavBarComponent,
    ScenariosComponent,
    OldMapsComponent,
    OldMapDialogComponent,
    ScenarioDialogComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
