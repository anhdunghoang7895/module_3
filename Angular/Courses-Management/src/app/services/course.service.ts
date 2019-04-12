import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {course} from 'src/app/models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public API: string ='http://localhost:3000/courses';

  constructor(public http: HttpClient) { }

  getAllCourses() {
    return this.http.get<course[]>(this.API);
  }

  addCourse(course: course){
    return this.http.post<course>(this.API, course);
  }

  getOneCourse(id: number){
    return this.http.get<course>(`${this.API}/${id}`);
  }

  updateCourse(course: course){
    return this.http.put(`${this.API}/${course.id}`, course); 
  }

  deleteCourse(id: number){
     return this.http.delete<course>(`${this.API}/${id}`);
  }
}
