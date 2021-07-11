import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../Context/Context';

const Home = () => {
    const { loginUser, setLoginUser } = useContext(LoginContext)
    useEffect(() => {
        setLoginUser({
            name: "Changed Name",
            email: "sany@gmail.com",
        })
    }, [setLoginUser])
    return (
        <div>
            {loginUser.name}
        </div>
    );
};

export default Home;