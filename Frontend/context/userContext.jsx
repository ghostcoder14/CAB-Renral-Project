import React, { createContext, useState } from "react";


export const UserdataContext = createContext()

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        firstname: '',
        lastname: ''
    })

    return(
        <UserdataContext.Provider value={[user, setUser]}>
            {children}
        </UserdataContext.Provider>
    )
}

export default UserContext;