import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as TutorialActions from './../../actions/tutorial.actions';

@Component({
  selector: 'app-create-tut',
  templateUrl: './create-tut.component.html',
  styleUrls: ['./create-tut.component.css']
})
export class CreateTutComponent implements OnInit {

  tutorialObj: any ={name: '', url: ''}
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addTutorial(){
    console.log('addTutorial', this.tutorialObj);
    this.store.dispatch(new TutorialActions.AddTutorial(this.tutorialObj))
  }

}
