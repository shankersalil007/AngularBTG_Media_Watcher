import { Component, OnInit } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';
import { MediaItemService } from 'src/app/services/media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  constructor(private miService: MediaItemService) { }

  ngOnInit(): void {
    this.mediaItems = this.miService.mediaItems;
  }

  mediaItems = [];

  

}
