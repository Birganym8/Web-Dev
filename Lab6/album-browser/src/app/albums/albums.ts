
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;
  errorMessage = '';

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: data => {
        this.albums = data;
        this.loading = false;
      },
      error: err => {
        console.error('Error fetching albums:', err);
        this.errorMessage = 'Failed to load albums. Please try again later.';
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
      },
      error: err => console.error('Error deleting album:', err)
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/albums', id]);
  }
}