import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className='navbar'>
        {' '}
        <NavBar />
      </div>

      <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/auth' element={<Auth />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
