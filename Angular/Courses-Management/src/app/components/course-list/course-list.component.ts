import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseService } from 'src/app/services/course.service';
import {course} from 'src/app/models/course.model';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public subscription: Subscription;
  public courses: course[] = [];

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.subscription = this.courseService.getAllCourses().subscribe((data: course[]) => {
      this.courses = data;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
