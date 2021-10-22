import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse } from "../models/error";
import { JokeModel } from "../models/joke";
import { IApiService } from "../services/ApiService";

export const getJokeAction = createAsyncThunk<
    JokeModel,
    { apiSvc: IApiService; category: string },
    { rejectValue: ErrorResponse }
>("api/getJoke", async ({ apiSvc, category }, { rejectWithValue }) => {
    return apiSvc.getJoke(category).catch(rejectWithValue);
});

export const getCategoriesAction = createAsyncThunk<
    string[],
    { apiSvc: IApiService },
    { rejectValue: ErrorResponse }
>("api/getCategories", async ({ apiSvc }, { rejectWithValue }) => {
    return apiSvc.getCategories().catch(rejectWithValue);
});

export const getJokeByQueryAction = createAsyncThunk<
    JokeModel[],
    { apiSvc: IApiService; query: string },
    { rejectValue: ErrorResponse }
>("api/getJokeByQuery", async ({ apiSvc, query }, { rejectWithValue }) => {
    return apiSvc
        .getJokeByQuery(query)
        .then(response => response.result.slice(0, 5))
        .catch(rejectWithValue);
});
