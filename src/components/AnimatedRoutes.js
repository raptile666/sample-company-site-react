import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Career from '../pages/Career';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import PageNotFound from '../pages/PageNotFound';

import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  
    const location = useLocation();
    
    return (
        <div>
            <AnimatePresence>
                <Routes location={location}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes