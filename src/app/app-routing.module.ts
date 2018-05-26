import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'test', loadChildren: './test/test.module#TestModule' },
  { path: 'api', loadChildren: './api/api.module#ApiModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }