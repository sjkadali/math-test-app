import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { StudentsCreateComponent } from './students/students-create/students-create.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsListComponent } from './students/students-list/students-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    StudentsComponent,
    TeachersComponent,
    RightnavComponent,
    LeftnavComponent,
    StudentsCreateComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
