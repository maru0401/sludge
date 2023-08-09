import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/Loading';
import './assets/style/Global.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const Master = React.lazy(() => import('./pages/Master'));
const News = React.lazy(() => import('./pages/News'));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                        <Master />
                } />
                <Route path="/news" element={
                    <Suspense fallback={<Loading />}>
                        <News />
                    </Suspense>
                } />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
