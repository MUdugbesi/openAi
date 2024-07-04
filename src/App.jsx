import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, Project, Contact, About } from './pages';
import './index.css';
import Header from './components/Header';
import Root from './pages/Root';

const App = () => {
    return (
        <>
            <main className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Root />}>
                            <Route index element={<Home />} />
                            <Route path='/project' element={<Project />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/about' element={<About />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    )
}

export default App;