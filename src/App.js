import logo from './logo.svg';
import './App.scss';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/* 
https://i.ibb.co/4JCtvvW/side-2.webp
https://i.ibb.co/0QThWHM/side-3.webp
https://i.ibb.co/jDKHv2R/top-1.webp
https://i.ibb.co/RBWD3Jb/top-2.webp
https://i.ibb.co/xqkvzS7/top-3.webp
https://i.ibb.co/zN721VV/side-1.webp
*/
