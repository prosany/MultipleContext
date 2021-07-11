import React, { createContext, useState } from 'react';

export const LoginContext = createContext();
export const ContextProvider = (props) => {
    const [loginUser, setLoginUser] = useState({});
    return (
        <LoginContext.Provider value={{ loginUser, setLoginUser }}>
            {props.children}
        </LoginContext.Provider>
    );
};


export const AdminContext = createContext();
export const AdminContextProvider = (props) => {
    const [loginAdmin, setLoginAdmin] = useState(
        {
            name: "Mahbaub Sany",
            email: "sany@gmail.com",
        }
    );
    return (
        <AdminContext.Provider value={{ loginAdmin, setLoginAdmin }}>
            {props.children}
        </AdminContext.Provider>
    );
};