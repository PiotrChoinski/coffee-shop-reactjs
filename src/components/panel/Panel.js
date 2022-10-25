import { useContext } from 'react';
import Context from './../../context/App.context';
import './Panel.scss';

const Panel = () => {
    const AppContext = useContext(Context);
    const { productsState, setProductsState, 
            productsDiscount, setProductsDiscount,
            emailState, setEmailState, 
            emailText, setEmailText, 
            phoneState, setPhoneState, 
            phoneText, setPhoneText, 
            adressState, setAdressState, 
            adressText, setAdressText,
            darkTheme, setDarkTheme,
            secondColor, setSecondColor,
            refreshPrices } = AppContext;

    const setProductsStateHandler = () => {   
        setProductsState(!productsState);
    }
    
    const setProductsDiscountHandler = (e) => {
        const text = e.target.value;
        setProductsDiscount(text);
        refreshPrices();
    }

    const setEmailStateHandler = () => {   
        setEmailState(!emailState);
    }
    
    const setEmailTextHandler = (e) => {
        const text = e.target.value;
        setEmailText(text);
    }

    const setPhoneStateHandler = () => {   
        setPhoneState(!phoneState);
    }
    
    const setPhoneTextHandler = (e) => {
        const text = e.target.value;
        setPhoneText(text);
    }

    const setAdressStateHandler = () => {   
        setAdressState(!adressState);
    }
    
    const setAdressTextHandler = (e) => {
        const text = e.target.value;
        setAdressText(text);
    }

    const setDarkThemeHandler = () => {   
        setDarkTheme(!darkTheme);
    }

    const setSecondColorHandler = (color) => {
        setSecondColor(color);
    }

    return (
        <div className='panel-container'>
            <h2>General settings</h2>
            <div className='general-container container'>
                <div className='panel'>
                    <h3>Color</h3>
                    <ul>
                        <li>
                            <p>Second color</p>
                            <div className='colors'>
                                <div className='color color--default' onClick={() => setSecondColorHandler('default')}></div>
                                <div className='color color--red' onClick={() => setSecondColorHandler('red')}></div>
                                <div className='color color--green' onClick={() => setSecondColorHandler('green')}></div>
                                <div className='color color--orange' onClick={() => setSecondColorHandler('orange')}></div>
                                <div className='color color--purple' onClick={() => setSecondColorHandler('purple')}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='panel'>
                    <h3>Dark theme</h3>
                    <ul>
                        <li>
                            <p>Dark theme</p>
                            <label className='toggler-wrapper style-1'>
                                <input type='checkbox' value={darkTheme} onChange={setDarkThemeHandler} defaultChecked={darkTheme}/>
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className='toggler-knob'></div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            
            <h2>Contact settings</h2>
            <div className='contact-container container'>
                <div className='panel'>
                    <h3>Email</h3>
                    <ul>
                        <li>
                            <p>Show email</p>
                            <label className='toggler-wrapper style-1'>
                                <input type='checkbox' value={emailState} onChange={setEmailStateHandler} defaultChecked={emailState}/>
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className='toggler-knob'></div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <p>Your email</p>
                            <input className={`input-text input-text--${secondColor}`} type='text' defaultValue={emailText} placeholder='Type email...' onChange={(e) => setEmailTextHandler(e)} maxLength='22'/>
                        </li>
                    </ul>
                </div>
                <div className='panel'>
                    <h3>Phone</h3>
                    <ul>
                        <li>
                            <p>Show phone number</p>
                            <label className='toggler-wrapper style-1'>
                                <input type='checkbox' value={phoneState} onChange={setPhoneStateHandler} defaultChecked={phoneState} />
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className='toggler-knob'></div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <p>Your phone number</p>
                            <input className={`input-text input-text--${secondColor}`} type='number' defaultValue={phoneText} placeholder='Type text...' onChange={(e) => setPhoneTextHandler(e)} maxLength='10' />
                        </li>
                    </ul>
                </div>
                <div className='panel'>
                    <h3>Adress</h3>
                    <ul>
                        <li>
                            <p>Show adress</p>
                            <label className='toggler-wrapper style-1'>
                                <input type='checkbox' value={adressState} onChange={setAdressStateHandler} defaultChecked={adressState} />
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className='toggler-knob'></div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <p>Your adress</p>
                            <input className={`input-text input-text--${secondColor}`} type='text' defaultValue={adressText} placeholder='Type text...' onChange={(e) => setAdressTextHandler(e)} maxLength='23'/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='panel'>
                <h2>Products settings</h2>
                <ul>
                    <li>
                        <p>Show</p>
                        <label className='toggler-wrapper style-1'>
                            <input type='checkbox' value={productsState} onChange={setProductsStateHandler} defaultChecked={productsState} className='purple-theme'/>
                            <div className={`theme theme--${secondColor} toggler-slider`}>
                                <div className='toggler-knob'></div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <p>Discount %</p>
                        <input className={`input-text input-text--${secondColor}`} type='number' defaultValue={productsDiscount} placeholder='Type number...' onChange={(e) => setProductsDiscountHandler(e)} min='1' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Panel;