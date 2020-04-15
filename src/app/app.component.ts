import { Component ,OnInit} from '@angular/core';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';


export interface imageRes {
  image_url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'topHat';
  plants: any;
  period: number;
  userInput: string = '';
  image_url: string = '';
  photoId: number;
  trigged: boolean = false;
  photoList: Array<any> = new Array();
  currentMode: string;
  modes: string[] = ['Comment', 'Picutre', 'Album', 'Post'];



  search() {
    this.apiService.searchPhoto(this.userInput).subscribe( (res:imageRes) => {
      this.image_url = res.image_url
    }, (err:HttpErrorResponse)=>{window.alert(err.message)}
    )
  }
  constructor(private apiService: ApiService) {
  }

  inputChange() {
    this.triggerInterval()
  }

  triggerInterval() {
    if (! this.trigged){
      setInterval(this.search.bind(this), 2000);
      this.trigged = true;
    }
  }
  ngOnInit() {
  }

  printVariable() {
    window.alert(this.userInput)
  }
}
