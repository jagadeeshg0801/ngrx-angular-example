import { Tutorial } from "src/app/models/tutorial.model";
import * as TutorialActions from './../actions/tutorial.actions';

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            let x= [...state] || [];
            x.splice(action.payload, 1)
            return x;
        default:
            return state;
    }
}