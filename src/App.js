import './App.scss';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './components/shared/Header/Header';
import NewsDetail from './Pages/NewsDetail/NewsDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='news-detail'>
            <Route path=':category/:id' element={<NewsDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
