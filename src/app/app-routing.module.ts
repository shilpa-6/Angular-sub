import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { ViewUserComponent } from './views/view-user/view-user.component';

const routes: Routes = [{
  path: 'create-user', component: CreateUserComponent
},
{
  path: 'view-users', component: ViewUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
