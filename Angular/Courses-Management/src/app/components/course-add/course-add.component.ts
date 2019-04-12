import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

import {course} from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  public routerService: Router;
  public subscription: Subscription;
  public newCourse: course;

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.newCourse = new course();
  }

  onAddCourse(){
    this.subscription = this.courseService.addCourse(this.newCourse).subscribe(returnData =>{
      if(returnData && returnData.id){
        this.routerService.navigate(['courses']);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
