import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbum } from '../album';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  getAlbums():Observable<IAlbum[]>{
    return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
