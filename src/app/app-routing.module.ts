import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';
import { ClientsAddComponent } from './components/clients-add/clients-add.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'clients', component: ClientsListComponent , canActivate: [AuthGuard]},
  { path: 'clients/create', component: ClientsAddComponent , canActivate: [AuthGuard]},
  { path: 'clients/:id/edit', component: ClientsEditComponent , canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
