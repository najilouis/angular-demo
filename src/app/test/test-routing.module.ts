import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { SubComponent } from './sub/sub.component';


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
      { path: '', component:TestComponent},
      { path: 'sub', component:SubComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TestRoutingModule { }