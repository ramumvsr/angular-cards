import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './user/course/course.component';
// import { CourseViewComponent } from './user/course-views/course-view.component';
import { CatsComponent } from './user/cats/cats.component';
import { EmptyComponent } from './user/empty/empty.component';


import { AppRoutingModule } from './app.routing';

import { CourseService } from './user/service/course-service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    // CourseViewComponent,
    CatsComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
