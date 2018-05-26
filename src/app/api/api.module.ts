import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ApiRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    ApiComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ApiModule { }