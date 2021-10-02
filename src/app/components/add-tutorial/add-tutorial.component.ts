import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent implements OnInit {
  newTutorialForm!: FormGroup ;
  tutorial: Tutorial = {
      title: '',
      description: '',
      published: false,
      publishedYear: ''
      };
  submitted: boolean = false;

  constructor(private tutorialService:TutorialService, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.newTutorialForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      published: new FormControl(false),
      publishedYear: new FormControl('', [Validators.required])
    });
  }

  get formControlls() {
    return this.newTutorialForm.controls;
  }

  saveTutorial() {
    const data = {title: this.tutorial.title, description: this.tutorial.description, 
      publishedYear: this.tutorial.publishedYear};
      console.log(this.newTutorialForm.value);  
    this.tutorialService.createTutorial(this.newTutorialForm.getRawValue()).subscribe(response => {
      console.log(response);
      this.resetForm();
    }, error => {
      console.error(error);
    });
  } 
  resetForm() {
    this.newTutorialForm.reset();
  }
  newTutorial(): void {
    this.tutorial = {
      title: '',
      description: '',
      published: false,
      publishedYear:''
    }
  }

}
