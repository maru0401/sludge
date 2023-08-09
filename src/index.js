import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/Loading';
import './assets/style/Global.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const Master = React.lazy(() => import('./pages/Master'));
const News = React.lazy(() => import('./pages/News'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/news" element={
                <Suspense fallback={<Loading />}>
                    <News />
                </Suspense>
            } />
        </Routes>
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<Loading />}>
                    <Master />
                </Suspense>
            } />
        </Routes>
    </BrowserRouter>
);
