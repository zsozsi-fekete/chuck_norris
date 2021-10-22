import { Provider } from "react-redux";
import { SearchJokeContainer } from "./containers/SearchJokeContainer";
import { SelectJokeContainer } from "./containers/SelectJokeContainer";
import { MainLayout } from "./layouts/MainLayout";
import ApiSvcProvider from "./providers/ApiServiceProvider";
import { store } from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <ApiSvcProvider>
                <MainLayout>
                    {{
                        selectJoke: <SelectJokeContainer />,
                        searchJoke: <SearchJokeContainer />,
                    }}
                </MainLayout>
            </ApiSvcProvider>
        </Provider>
    );
}

export default App;
