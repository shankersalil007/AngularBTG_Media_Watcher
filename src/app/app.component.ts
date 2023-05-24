import { Component } from '@angular/core';
import { MediaItem } from './models/media-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
  }
  activeMediaItem: MediaItem;
  title = 'media-watcher';

  onCloseButtonClick(){
    this.activeMediaItem = null;
  }

  onWatchEmitted(mediaItem: MediaItem){
    this.activeMediaItem = mediaItem;
  }
}
