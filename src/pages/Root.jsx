import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
    return (
        <>
            <main className=''>
                <Header />
                <Outlet />
            </main>
        </>
    )
}

export default Root