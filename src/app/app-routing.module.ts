import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterDeactivateGuard } from './register-deactivate.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate:[RegisterDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[RegisterDeactivateGuard]
})
export class AppRoutingModule { }
