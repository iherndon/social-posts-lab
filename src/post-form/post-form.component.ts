import { Component, Output, EventEmitter } from '@angular/core';

interface Post {
  title: string;
  body: string;
}

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent {
  @Output() submitted = new EventEmitter<Post>();
  title: string = '';
  body: string = '';

  addPost(event) {
    event.preventDefault();
    if (this.title && this.body) {
      this.submitted.emit({ title: this.title, body: this.body });
    }
  }
}