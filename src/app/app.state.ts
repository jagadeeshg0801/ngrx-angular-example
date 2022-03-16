import { Tutorial } from "./models/tutorial.model";

export interface AppState {
    readonly tutorial: Tutorial[]; // if we have multiple app states means, need to add one more readonly variable for it in the same AppState
}