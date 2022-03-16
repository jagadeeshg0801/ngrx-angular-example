import { Tutorial } from "src/app/models/tutorial.model";
import {  Action } from '@ngrx/store'

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

export class AddTutorial implements Action{
    readonly type = ADD_TUTORIAL;
    constructor(public paylod: Tutorial){}
}

export class RemoveTutorial implements Action{
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: number){

    }
}

export type Actions = AddTutorial | RemoveTutorial; // Exporting All our Actions