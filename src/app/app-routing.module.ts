import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';
import { ClientsAddComponent } from './components/clients-add/clients-add.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full'},
  { path: 'clients', component: ClientsListComponent },
  { path: 'clients/create', component: ClientsAddComponent },
  { path: 'clients/:id/edit', component: ClientsEditComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
