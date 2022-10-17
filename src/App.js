import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from './views/website';
import Admin from './views/admin';
import './App.scss';
import Context from './context/App.context';
import { useState } from 'react';

const App = () => {
  const { Provider } = Context;
  const [sliderState, setSliderState] = useState(true);
  const [sliderText, setSliderText] = useState('Slider');
  const [mainColor, setMainColor] = useState('#fff');

  return (
    <div className='App'>
      <Provider value={{ sliderState, setSliderState, sliderText, setSliderText }}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Website />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
