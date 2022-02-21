import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogItemComponent } from './components/blog/blog-item/blog-item.component';
import { BlogViewComponent } from './components/blog/blog-view/blog-view.component';
import { BlogComponent } from './components/blog/blog.component';
import { ConstructionComponent } from './components/construction/construction.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckersComponent } from './components/games/checkers/checkers.component';
import { ChessComponent } from './components/games/chess/chess.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar-component/nav-bar.component';
import { NavImageComponent } from './components/nav-image/nav-image.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConstructionComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    BlogComponent,
    ProjectsComponent,
    CheckersComponent,
    ChessComponent,
    FooterComponent,
    NavImageComponent,
    BlogViewComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA] 
})
export class AppModule { }
