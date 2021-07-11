import React, { useContext } from 'react';
import { AdminContext } from '../Context/Context';

const About = () => {
    const { loginAdmin } = useContext(AdminContext)
    return (
        <div>
            {loginAdmin.name}
        </div>
    );
};

export default About;