import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../data-testing';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  constructor(private route: ActivatedRoute) {}
  
  post: detailPost = { id: 0, titulo: 'testing 1', texto: 'Texto testing 1' }

  ngOnInit(): void {
    
    this.post = data[this.route.snapshot.params["id"]]
  }
}

interface detailPost {
  id: number, 
  titulo: string,
  texto: string
}
