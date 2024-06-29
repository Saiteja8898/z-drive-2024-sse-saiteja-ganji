import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
