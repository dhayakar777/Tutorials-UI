import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Tutorial } from '../models/tutorial.model';

const baseUrl = "http://localhost:8080/api/tutorials";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
 //  baseUrl: string = "http://localhost:8080/api/tutorials";

  constructor(private httpClient: HttpClient) { }

    getAllTutorials(): Observable<Tutorial[]> {
       return this.httpClient.get<Tutorial[]>(baseUrl);
    }
    getTutorial(tutorialId:number): Observable<Tutorial> {
      let header = new HttpHeaders();
      header.set('Access-Control-Allow-Origin', '*'); 
      return this.httpClient.get(`${baseUrl}/${tutorialId}`);
    }
    createTutorial(data: any): Observable<any> {
      return this.httpClient.post(baseUrl, data);
    }

    updateTutorial(id:any, data: any): Observable<any> {
      return this.httpClient.put(`${baseUrl}/${id}`, data);
    }
    deleteTutorial(id:any):Observable<any> {
      return this.httpClient.delete(`${baseUrl}/${id}`);
    }
    deleteAll(): Observable<any> {
      return this.httpClient.delete(baseUrl);
    }
    findByTitle(title: any): Observable<Tutorial[]> {
      return this.httpClient.get<Tutorial[]>(`${baseUrl}?title=${title}`);
    }
}
