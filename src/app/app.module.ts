import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { StoryBoardComponent } from './story-board/story-board.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    StoryBoardComponent,
    BookmarksComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
