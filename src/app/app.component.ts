import { Component } from '@angular/core';
import { MediaItem } from './models/media-item.model';
import { MediaItemService } from './services/media-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private miS: MediaItemService){
    this.activeMediaItem = miS.mediaItems[0]
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
