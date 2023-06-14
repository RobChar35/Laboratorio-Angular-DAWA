import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../data-testing';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  constructor(private route: ActivatedRoute) {}

  posts: dataPosts[] = []
  
  ngOnInit() :void {
    this.posts = data
  }
}

interface dataPosts {
  id: number, 
  titulo: string,
  texto: string
}