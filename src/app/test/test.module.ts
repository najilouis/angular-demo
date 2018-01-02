import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { SubComponent } from './sub/sub.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TestComponent,
    SubComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TestModule { }