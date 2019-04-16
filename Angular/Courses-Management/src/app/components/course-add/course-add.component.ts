import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})

export class CourseAddComponent implements OnInit,OnDestroy {
  public subscription: Subscription;
  public formAddCourse: FormGroup;

  constructor(
    public courseService: CourseService,
    public routerService: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onAddCourse() {
    this.subscription = this.courseService.addCourse(this.formAddCourse.value).subscribe(PostingData => {
      if( PostingData == null){
        return null;
      }
      if (PostingData && PostingData.id) {
        this.routerService.navigate(['courses']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createForm(){
    this.formAddCourse = this.formBuilder.group({
      name: ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]],
      description: ['',[
        Validators.required,
      ]],
      fee: ['',[
        Validators.required,
      ]],
    });

    this.formAddCourse.valueChanges.subscribe(insertData=>{
      console.log(this.formAddCourse);
    });
  }

  onClickReset(){
    this.formAddCourse.reset();
  }
}
