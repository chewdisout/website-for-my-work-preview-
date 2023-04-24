import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent {
  public project?: Project[];

  constructor(http: HttpClient) {
    http.get<Project[]>('/project').subscribe(result => {
      this.project = result;
    }, error => console.error(error));
  }

  title = 'angularapp';
}

interface Project {
  ProjectId: number;
  ProjectName: string;
  ProjectDescription: string;
  IsActive: boolean;
}
