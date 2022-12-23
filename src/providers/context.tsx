import { createContext, ReactNode} from "react";

interface IProvider{
    children: ReactNode;
  }

export const Contexts = createContext({})

const ContextsProvider = ({children}: IProvider) =>{

    return(
        <Contexts.Provider value={{}}>
          {children}
        </Contexts.Provider>
        )
}

export default ContextsProvider;