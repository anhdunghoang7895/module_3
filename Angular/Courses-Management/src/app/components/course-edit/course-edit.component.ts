import { Component, OnInit,  OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute,Params } from '@angular/router';

import { course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit,OnDestroy {

  public subscription: Subscription;
  public editingCourse: course;
  public selectedSubscription: Subscription;

  constructor(
    public courseService: CourseService,
    public routerService: Router,
    public activatedRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.editingCourse = new course();
    this.loadData();
  }

  loadData(){
    this.selectedSubscription = this.activatedRouteService.params.subscribe((returnData: Params)=> {
      this.subscription = this.courseService.getOneCourse(returnData.id).subscribe((editingCourse: course)=>{
        this.editingCourse = editingCourse;
      });
    });
  }

  onEditCourse(id: number){
    this.subscription = this.courseService.updateCourse(this.editingCourse).subscribe((editedData: course)=>{
      this.routerService.navigate(['/courses']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if(this.selectedSubscription){
      this.selectedSubscription.unsubscribe();
    }
  }
}
