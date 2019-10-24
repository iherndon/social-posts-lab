import { Component, Input } from '@angular/core';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html'
})

export class SinglePost {
  @Input() title: string;
  @Input() body: string;
}