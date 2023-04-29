import { createContext, useContext, useState } from "react";

const Contextdata = createContext();

export const ContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const globalDatas = {showModal, setShowModal};
    return (
        <Contextdata.Provider value={globalDatas}>
            {children}
        </Contextdata.Provider>
    )
};

export const useContextData = () => {
    return useContext(Contextdata);
}