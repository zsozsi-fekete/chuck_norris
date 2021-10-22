export interface JokeModel {
    icon_url: string;
    id: string;
    url: string;
    value: string;
}

export const defaultJoke: JokeModel = {
    icon_url: "",
    id: "",
    url: "",
    value: "",
};

export interface JokesResponse {
    total: number;
    result: JokeModel[];
}
