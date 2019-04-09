import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TodoAppComponent} from './todo-app/todo-app.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'todo', component: TodoAppComponent},
    { path: 'template', component: TemplateDrivenFormComponent},
    { path : 'detail/:id', component: ViewDetailComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


