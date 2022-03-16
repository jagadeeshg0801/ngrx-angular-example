import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { ReadTutComponent } from './components/read-tut/read-tut.component';
import { CreateTutComponent } from './components/create-tut/create-tut.component';
import { EditTutComponent } from './components/edit-tut/edit-tut.component';
import { reducer } from './reducers/tutorial.reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReadTutComponent,
    CreateTutComponent,
    EditTutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}), 
    StoreModule.forFeature('tutorial', reducer),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
