
import ReactDOM from 'react-dom/client';
import './assets/style/Global.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Master from './pages/Master';
import AllNews from './pages/AllNews';
import Detail from './pages/Detail';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Master />
                } />
                <Route path="/news" element={
                    <AllNews />
                } />
                <Route path="/detail" element={
                    <Detail />
                } />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
