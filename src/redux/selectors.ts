import { ErrorResponse } from "../models/error";
import { JokeModel } from "../models/joke";
import { RootState } from "./store";

export const selectJoke = (state: RootState): JokeModel => state.rootReducer.joke;

export const selectCategories = (state: RootState): string[] => state.rootReducer.categories;

export const selectQueriedJokes = (state: RootState): JokeModel[] => state.rootReducer.queriedJokes;

export const selectError = (state: RootState): ErrorResponse | undefined => state.rootReducer.error;
