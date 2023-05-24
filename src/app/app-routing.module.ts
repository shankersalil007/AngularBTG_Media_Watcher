import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { InputMediaItemComponent } from './components/input-media-item/input-media-item.component';

const routes: Routes = [
    {
        path: 'media',
        component: MediaItemListComponent
    },
    {
        path: 'add',
        component: InputMediaItemComponent
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }