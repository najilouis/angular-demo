import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api.component';


export const routes: Routes = [
  {
    // path: '',
    // pathMatch: 'full',
    // component: TestComponent,
    // children: [
    //   { path: 'sub', component:SubComponent},
    // ]
    path: ''
    ,children: [
      { path: '', component:ApiComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ApiRoutingModule { }