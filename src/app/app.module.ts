import { NgModule } from '@angular/core';
//
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http.interceptor';

import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter, MatDateFormats } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
//
HttpClientModule

import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';    // Para suportar MatFormField
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';

// Registrar locale pt-BR
registerLocaleData(localePt);

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule, // MatFormFieldModule
    MatInputModule, // MatInputModule
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule, // MatSelectModule
    MatExpansionModule,


  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
