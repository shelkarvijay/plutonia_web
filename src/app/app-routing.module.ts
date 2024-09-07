import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes =[
  { 
    path: '', 
    component: HomeComponent
  },

  { 
    path: 'home', 
    redirectTo: '', pathMatch: 'full'
  },

  { 
    path: 'contact', 
    component: ContactComponent
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
