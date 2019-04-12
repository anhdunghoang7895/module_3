import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { CourseAddComponent } from './components/course-add/course-add.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  
  {path: 'courses', component:CoursesComponent, 
    children:[
      {path: '', component:CourseListComponent},
      {path: ':id/edit', component:CourseEditComponent},
      {path: 'add', component:CourseAddComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
