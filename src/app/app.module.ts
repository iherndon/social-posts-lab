import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SinglePost } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePost,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
