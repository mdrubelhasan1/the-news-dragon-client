import React from 'react';
import NavigationsBar from '../pages/Shared/NavigationsBar/NavigationsBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationsBar></NavigationsBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;