import { Injectable } from '@angular/core';
import {Project} from "src/app/Models/Project";
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public API:string = 'http://localhost:3000/project';


  constructor(private http: HttpClient) { }

  getAllProject() {
    return this.http.get<Project[]>(this.API);
  }

  addProject(project):  Observable<Project[]>{
    return this.http.post<Project>(API, project, http).pipe(
      tap((project: Project) => console.log(`added project w/ id=${project.id}`))
    );
  }
}
