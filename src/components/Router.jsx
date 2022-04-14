import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import Results from './Results';
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/search" />} />
            <Route path='/search' element={<Results />} />
            <Route path='/image' element={<Results />} />
            <Route path='/videos' element={<Results />} />
            <Route path='/news' element={<Results />} />
        </Routes>
    );
};

export default Router;