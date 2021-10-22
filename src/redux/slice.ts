import { createSlice, isAnyOf, isRejected } from "@reduxjs/toolkit";
import { ErrorResponse } from "../models/error";
import { defaultJoke, JokeModel } from "../models/joke";
import { getCategoriesAction, getJokeAction, getJokeByQueryAction } from "./actions";

export interface IRootState {
    joke: JokeModel;
    selectedCategory: string;
    categories: string[];
    queriedJokes: JokeModel[];
    error?: ErrorResponse;
}

const initialState: IRootState = {
    joke: defaultJoke,
    selectedCategory: "",
    categories: [],
    queriedJokes: [],
};

const slice = createSlice({
    name: "root",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getJokeAction.fulfilled, (state, { payload }) => {
                state.joke = payload;
            })
            .addCase(getCategoriesAction.fulfilled, (state, { payload }) => {
                state.categories = payload;
            })
            .addCase(getJokeByQueryAction.fulfilled, (state, { payload }) => {
                state.queriedJokes = payload;
                state.error = undefined;
            })
            .addMatcher(
                isAnyOf(isRejected(getJokeAction, getCategoriesAction, getJokeByQueryAction)),
                (state, { payload }) => {
                    state.error = payload;
                }
            );
    },
});

export const rootReducer = slice.reducer;
