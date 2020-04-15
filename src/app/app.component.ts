import { Component ,OnInit} from '@angular/core';
import { PlantsService } from './plants.service';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'topHat';
  plants: any;
  period: number;
  photoId: number;
  photoList: Array<any>;
  currentMode: string;
  modes: string[] = ['Comment', 'Picutre', 'Album', 'Post'];


  search() {
    this.apiService.getPhotoById(this.photoId).subscribe( (res) => {
      this.photoList.push(res)
      console.log(this.photoList)
    })
  }
  constructor( private plantsService: PlantsService ,private apiService: ApiService) {
  }

  ngOnInit() {
  }

}
