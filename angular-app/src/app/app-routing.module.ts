import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsCreateComponent } from './students/students-create/students-create.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-students', component: StudentsCreateComponent},
  { path: 'get-students', component: StudentsListComponent}
 /* { path: '/teachers', component: TeachersComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
