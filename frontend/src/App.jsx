import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
// Importe tes composants de pages
import Home from './pages/Home'; 
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1. La route parente utilise le Layout */}
                <Route path="/" element={<MainLayout />}>
                    
                    {/* 2. Les routes enfants s'afficheront dans l'Outlet du Layout */}
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;