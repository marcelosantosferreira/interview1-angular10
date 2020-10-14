import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../album';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  //albums: any = '';
  albums: IAlbum[];
  title: string = 'Albums';

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    // get albums

    this.ds.getAlbums().subscribe(
      r => this.albums = r,
      e => console.error(e)
    );
    /*
    this.ds.getAlbums().subscribe(
      r => this.albums = r,
      e => console.error(e)
    );
    */
  }

  handleCollection(c: IAlbum[]){
    this.albums = c;
    //console.log(this.albums);
  }
}
