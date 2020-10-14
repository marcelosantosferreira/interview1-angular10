
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { DataService } from '../data/data.service';
import { AlbumComponent } from './album.component';
import { IAlbum } from '../album';

describe('AlbumComponent', () => {
  let fixture: ComponentFixture<AlbumComponent>;
  let mockDataService;
  let fakeAlbum : IAlbum[];

  beforeEach(() => {

    fakeAlbum = [
      {albumdId: 100,  id: 12, title: 'Fake Album', url: 'URL', thumbnailUrl: 'URL'},
      {albumdId: 101,  id: 13, title: 'Fake Album 2', url: 'URL', thumbnailUrl: 'URL'},
      {albumdId: 102,  id: 14, title: 'Fake Album 3', url: 'URL', thumbnailUrl: 'URL'}
    ]

    mockDataService = jasmine.createSpyObj(['getAlbums']);

    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ AlbumComponent ],
      providers: [{provide: DataService, useValue: mockDataService}],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(AlbumComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have a title Albums', () => {
    expect(fixture.componentInstance.title).toEqual('Albums');
  });

  it('should have a p element', () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toContain('Albums');
  });

  it('should have called getAlbums() once', () => {
    mockDataService.getAlbums.and.returnValue(of(fakeAlbum));
    fixture.detectChanges();

    expect(mockDataService.getAlbums).toHaveBeenCalled();
  });

  it('should set albumns correctly from the service with 3 items',()=>{
    mockDataService.getAlbums.and.returnValue(of(fakeAlbum));
    fixture.detectChanges();

    expect(fixture.componentInstance.albums.length).toBe(3);
  });
});
