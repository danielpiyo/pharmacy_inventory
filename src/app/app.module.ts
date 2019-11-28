import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                 //api
import { MatSidenavModule, MatAutocompleteModule, MatBadgeModule, MatSnackBarModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatChipsModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule, MatTableModule, MatSelectModule, MatInputModule, MatDialogModule, MatProgressBarModule, MatTooltipModule, MatDatepickerModule, MatCheckboxModule, MatExpansionModule, MatSlideToggleModule, MatProgressSpinnerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserModule, AppRoutingModule, AccordionModule,
    BrowserAnimationsModule, MatSidenavModule, MatAutocompleteModule,
    MatBadgeModule, MatSnackBarModule, MatPaginatorModule,
    MatSortModule, MatToolbarModule, MatChipsModule,
    MatIconModule, MatListModule, MatCardModule,
    MatButtonModule, MatTableModule, MatSelectModule,
    MatInputModule, MatDialogModule, MatProgressBarModule,
    MatTooltipModule, MatDatepickerModule, MatCheckboxModule,
    MatExpansionModule, MatSlideToggleModule, MatProgressSpinnerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
