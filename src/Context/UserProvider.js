import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = (props) => {
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    return (
        <UserContext.Provider value={{
            token: token,
            setToken: setToken
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;
