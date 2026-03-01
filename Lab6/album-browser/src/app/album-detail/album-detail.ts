import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail implements OnInit {
  album!: Album;
  newTitle = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
      this.loading = false;
    });
  }

  save() {
    const updatedAlbum: Album = { ...this.album, title: this.newTitle };
    this.albumService.updateAlbum(updatedAlbum).subscribe(() => {
      this.album.title = this.newTitle;
      alert('Album updated!');
    });
  }

  goToPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}