import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="system/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
