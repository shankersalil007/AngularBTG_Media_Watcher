import { Component } from '@angular/core';
import { MediaItem } from './models/media-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mediaItem: MediaItem = {
    name: 'The Redemption',
    year: 1684928725540,
    category: 'Action',
    isFavorite: false,
  }
  title = 'media-watcher';
}
