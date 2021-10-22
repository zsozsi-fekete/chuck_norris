export class BaseApiService {
    private url: string;

    constructor() {
        this.url = process.env.REACT_APP_API_URL || "NO_URL_SET";
    }

    protected get<T>(path: string, filters: string = ""): Promise<T> {
        const options: RequestInit = {};
        return fetch(this.url + path + filters, options)
            .then(response => {
                if (response.ok) return response.json();
                return response.json().then(response => {
                    throw response;
                });
            })
            .then(data => data as T);
    }
}
