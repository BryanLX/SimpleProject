import { Component ,OnInit} from '@angular/core';
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
  photoList: Array<any> = new Array();
  currentMode: string;
  modes: string[] = ['Comment', 'Picutre', 'Album', 'Post'];


  search() {
    // this.apiService.getPhotoById(this.photoId).subscribe( (res) => {
    //   this.photoList.push(res)
    //   console.log(this.photoList)
    // })
    this.photoList.push({
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
      })
      console.log(this.photoList)
  }
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

}
