import { Component, OnInit } from '@angular/core';
import { Project } from "src/app/Models/Project";
import { ProjectsService } from "src/app/projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public selectedProject: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(returnData => {
      this.projects = returnData;
    });
  }
  onSelect(project: Project[]): void {
    this.selectedProject = project;
  }
}