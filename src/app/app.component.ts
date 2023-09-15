import { Component } from '@angular/core';
import { PhotoapiService } from './photoapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = ''
  constructor(private photoapi: PhotoapiService) { }

  onclick() {
    this.photoapi.getthatphoto().subscribe((response: any) => {
      this.url = response.urls.thumb
     
    })

  }

}


