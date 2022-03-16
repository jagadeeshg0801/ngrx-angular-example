import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from './../../models/tutorial.model';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs';
import * as TutorialActions from './../../actions/tutorial.actions';
@Component({
  selector: 'app-read-tut',
  templateUrl: './read-tut.component.html',
  styleUrls: ['./read-tut.component.css']
})
export class ReadTutComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {  
    this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {
  }

  delTutorial(index: number){
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

}
