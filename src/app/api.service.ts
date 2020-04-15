import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://imagesearch.dev.tophat.com/';

  constructor(private httpClient: HttpClient) { }


  public searchPhoto(queryString: string){
    return this.httpClient.get(`${this.apiURL}photos/?query=${queryString}`)
  }


  // public handelError(error: HttpErrorResponse){
  //   window.alert()
  // }
  public createPhoto(photo:Photo) {
    return this.httpClient.post(`${this.apiURL}photos`,photo);
  }
  
}
