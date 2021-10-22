import { JokeModel, JokesResponse } from "../models/joke";
import { BaseApiService } from "./baseApiService";

export interface IApiService {
    getJoke: (selectedCategory: string) => Promise<JokeModel>;
    getCategories: () => Promise<string[]>;
    getJokeByQuery: (query: string) => Promise<JokesResponse>;
}

export class ApiService extends BaseApiService implements IApiService {
    getJoke(selectedCategory: string): Promise<JokeModel> {
        const filter = !!selectedCategory ? `?category=${selectedCategory}` : "";
        return this.get<JokeModel>("/jokes/random", filter);
    }

    getCategories(): Promise<string[]> {
        return this.get<string[]>("/jokes/categories");
    }

    getJokeByQuery(query: string): Promise<JokesResponse> {
        return this.get<JokesResponse>("/jokes/search", `?query=${query}`);
    }
}
