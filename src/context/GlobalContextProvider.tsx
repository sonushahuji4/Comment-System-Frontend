import React, { useReducer } from "react";
import { reducer, initialState } from './reducer';

interface Action {
    type: string;
    value: any;
}

interface InitContextProps  { 
    payload: any;
    dispatch: React.Dispatch<React.SetStateAction<Action>>;
}

export const GlobalStateContext = React.createContext({});
export const GlobalDispatchContext = React.createContext({} as InitContextProps);


const GlobalContextProvider = ({children}: any) => {
    const [state, dispatch]: any = useReducer<any>(reducer, initialState);
    
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
}

export default GlobalContextProvider;