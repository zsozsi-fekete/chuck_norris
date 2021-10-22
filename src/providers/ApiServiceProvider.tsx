import { createContext, FC } from "react";
import { ApiService, IApiService } from "../services/ApiService";

interface IContext {
    apiSvc: IApiService;
}

export const ApiSvcContext = createContext<IContext>(undefined!);

const ApiSvcProvider: FC = ({ children }) => {
    const apiSvc = new ApiService();

    return <ApiSvcContext.Provider value={{ apiSvc }}>{children}</ApiSvcContext.Provider>;
};

export default ApiSvcProvider;
