import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {Project} from 'src/app/Models/Project';
import {ProjectsService} from 'src/app/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  public newProject: Project[];
  public projectForm: FormGroup;

  constructor(private projectService: ProjectsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'content': [null, Validators.required],
    });
  }

  onSubmit(form:NgForm){
    this.projectService.addProject(form).subscribe()
  }
}
