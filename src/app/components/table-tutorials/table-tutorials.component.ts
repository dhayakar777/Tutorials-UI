import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-table-tutorials',
  templateUrl: './table-tutorials.component.html',
  styleUrls: ['./table-tutorials.component.scss']
})
export class TableTutorialsComponent implements OnInit {

  tutorials?: Tutorial[] = [];
  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
   // this.tutorialList = [];
   this.getAllTutorials();
  }
  getAllTutorials():void {
    this.tutorialService.getAllTutorials().subscribe(response=> {
      this.tutorials = response;
      console.log(response);
    }, error=> {
      console.log(error)
    })
  }

}
