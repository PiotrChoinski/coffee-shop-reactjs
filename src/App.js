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

  const [emailState, setEmailState] = useState(true);
  const [emailText, setEmailText] = useState('example@example.com');

  const [phoneState, setPhoneState] = useState(true);
  const [phoneText, setPhoneText] = useState('123456789');

  const [adressState, setAdressState] = useState(true);
  const [adressText, setAdressText] = useState('Example 4/20');

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'App dark-theme' : 'App'}>
      <Provider value={{ sliderState, setSliderState, 
                         sliderText, setSliderText,
                         emailState, setEmailState, 
                         emailText, setEmailText, 
                         phoneState, setPhoneState, 
                         phoneText, setPhoneText, 
                         adressState, setAdressState, 
                         adressText, setAdressText,
                         darkTheme, setDarkTheme }}>
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
