import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }


  public getPhotoById(Id: number){
    return this.httpClient.get(`${this.apiURL}albums/1/photos/${Id}`);
  }


  public createPhoto(photo:Photo) {
    return this.httpClient.post(`${this.apiURL}photos`,photo);
  }
  
}
