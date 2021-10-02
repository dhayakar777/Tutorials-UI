import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {


  currentTutorial: Tutorial = {};
  message = '';
  constructor(private tutorialService: TutorialService, 
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
   this.message = '';
   this.currentTutorial = new Tutorial();
   this.currentTutorial.published = false;
   this.getTutorial(this.route.snapshot.params.id);
  }

  getTutorial(id:number): void {
    this.tutorialService.getTutorial(id).subscribe(data=>{
      this.currentTutorial = data;
      console.log(data);
      console.log(this.currentTutorial);
    }, error=> {
      console.log(error);
    })
  }

  updatePublished(status: boolean): void {
      const data = { title: this.currentTutorial.title, 
        description: this.currentTutorial.description,
        published:status,
        publishedYear: this.currentTutorial.publishedYear}
      this.message = '';
      this.tutorialService.updateTutorial(this.currentTutorial.id, data).subscribe(response=> {
        this.currentTutorial.published = status;
        console.log(response);
        this.message = response.message ? response.message : "The status was updated successfully";
      }, error => {
        console.log(error);
      });  
  }
  updateTutorial():void {
    this.message = '';
    this.tutorialService.updateTutorial(this.currentTutorial.id, this.currentTutorial).subscribe(resp => {
      console.log(resp);
      this.message = resp.message ? resp.message: "This tutorial was updated successfully"; 
    }, error=>{
      console.log(error);
    })
  }
  deleteTutorial():void {
    this.tutorialService.deleteTutorial(this.currentTutorial.id).subscribe(resp=> {
      console.log(resp);
      this.router.navigate(['/tutorials']);
    }, error=> {
      console.log(error);
    })
  }
}
