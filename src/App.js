import React from 'react';

import HeaderMenu from './components/HeaderMenu.js';
import HeaderHero from './components/HeaderHero.js';
import Tasks from './components/Tasks.js';


export function App() {
    return (
        <>
            <HeaderHero />
            <HeaderMenu />
            <Tasks />
        </>
    );
}