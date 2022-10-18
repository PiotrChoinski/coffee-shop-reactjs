import './Panel.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const AppContext = useContext(Context);
    const { sliderState, setSliderState, 
            sliderText, setSliderText,
            emailState, setEmailState, 
            emailText, setEmailText, 
            phoneState, setPhoneState, 
            phoneText, setPhoneText, 
            adressState, setAdressState, 
            adressText, setAdressText,
            darkTheme, setDarkTheme,
            secondColor, setSecondColor } = AppContext;

    const setSliderStateHandler = () => {   
        setSliderState(!sliderState);
    }
    
    const setSliderTextHandler = (e) => {
        const text = e.target.value;
        setSliderText(text);
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
                            <label className="toggler-wrapper style-1">
                                <input type='checkbox' value={darkTheme} onChange={setDarkThemeHandler} defaultChecked={darkTheme}/>
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className="toggler-knob"></div>
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
                            <label className="toggler-wrapper style-1">
                                <input type='checkbox' value={emailState} onChange={setEmailStateHandler} defaultChecked={emailState}/>
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className="toggler-knob"></div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <p>Your email</p>
                            <input type='text' defaultValue={emailText} placeholder='Type email...' onChange={(e) => setEmailTextHandler(e)}/>
                        </li>
                    </ul>
                </div>
                <div className='panel'>
                    <h3>Phone</h3>
                    <ul>
                        <li>
                            <p>Show phone number</p>
                            <label className="toggler-wrapper style-1">
                                <input type='checkbox' value={phoneState} onChange={setPhoneStateHandler} defaultChecked={phoneState} />
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className="toggler-knob"></div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <p>Your phone number</p>
                            <input type='text' defaultValue={phoneText} placeholder='Type text...' onChange={(e) => setPhoneTextHandler(e)}/>
                        </li>
                    </ul>
                </div>
                <div className='panel'>
                    <h3>Adress</h3>
                    <ul>
                        <li>
                            <p>Show adress</p>
                            <label className="toggler-wrapper style-1">
                                <input type='checkbox' value={adressState} onChange={setAdressStateHandler} defaultChecked={adressState} />
                                <div className={`theme theme--${secondColor} toggler-slider`}>
                                    <div className="toggler-knob"></div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <p>Your adress</p>
                            <input type='text' defaultValue={adressText} placeholder='Type text...' onChange={(e) => setAdressTextHandler(e)}/>
                        </li>
                    </ul>
                </div>
            </div>





            <div className='panel'>
                <h2>Slider settings</h2>
                <ul>
                    <li>
                        <p>Show</p>
                        <label className="toggler-wrapper style-1">
                            <input type='checkbox' value={sliderState} onChange={setSliderStateHandler} defaultChecked={sliderState} className='purple-theme'/>
                            <div className={`theme theme--${secondColor} toggler-slider`}>
                                <div className="toggler-knob"></div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <p>Text</p>
                        <input type='text' defaultValue={sliderText} placeholder='Type text...' onChange={(e) => setSliderTextHandler(e)}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Panel;