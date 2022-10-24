import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.scss';
import Website from './views/website';
import Admin from './views/admin';
import Context from './context/App.context';

const App = () => {
  const { Provider } = Context;
  const [products, setProducts] = useState([]);
  const [productsState, setProductsState] = useState(true);
  const [productsText, setProductsText] = useState('Products');
  
  const [emailState, setEmailState] = useState(true);
  const [emailText, setEmailText] = useState('example@example.com');
  
  const [phoneState, setPhoneState] = useState(true);
  const [phoneText, setPhoneText] = useState('123456789');
  
  const [adressState, setAdressState] = useState(true);
  const [adressText, setAdressText] = useState('Example 4/20');
  
  const [secondColor, setSecondColor] = useState('default');
  
  const [darkTheme, setDarkTheme] = useState(false);
  
  useEffect(() => { 
    const getData = async () => {
      const response = await fetch('./products.json');
      const data = await response.json();
      setProducts(data.products);
    }
    getData();
  }, []);
  
  return (
    <div className={darkTheme ? 'App dark-theme' : 'App'}>
      <Provider value={{ productsState, setProductsState, 
                         productsText, setProductsText,
                         emailState, setEmailState, 
                         emailText, setEmailText, 
                         phoneState, setPhoneState, 
                         phoneText, setPhoneText, 
                         adressState, setAdressState, 
                         adressText, setAdressText,
                         darkTheme, setDarkTheme,
                         secondColor, setSecondColor,
                         products }}>
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