import { Component } from '@angular/core';
import { Blahaj } from 'src/app/models/blahaj';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gif-viewer',
  templateUrl: './gif-viewer.component.html',
  styleUrls: ['./gif-viewer.component.css']
})
export class GifViewerComponent {
  constructor(private apiService: ApiService) {}
  
  url:string = "https://blahaj.xyz/sharks/BX0zIL6gUsE-png__700.jpg";
  blahaj:Blahaj = new Blahaj(this.url, "u/relsaaaa", "Blåhaj had a night out at the karaoke bar");



  ngOnInit() {
    this.apiService.getRadomBlahaj().subscribe({
      next: (blahaj:Blahaj) => {
        this.url = blahaj.url;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
