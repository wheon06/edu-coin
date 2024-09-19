import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Coin from './routes/Coin';

function App() {
  return (
    <div className='min-h-screen min-w-full'>
      <BrowserRouter>
        <div className='flex min-h-screen flex-col bg-black/10'>
          <div className='mx-auto max-w-4xl p-10'>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/coin/*' element={<Coin />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
