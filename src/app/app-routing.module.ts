import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes =[
  { 
    path: '', 
    component: AppComponent
  },

  { 
    path: 'home', 
    redirectTo: '', pathMatch: 'full'
  },

  { 
    path: 'index',
    redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
