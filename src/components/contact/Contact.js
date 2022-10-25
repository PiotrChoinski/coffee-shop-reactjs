import './Contact.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Contact = (props) => {
    const AppContext = useContext(Context)
    const { emailState, emailText,
            phoneState, phoneText,
            adressState, adressText,
            secondColor } = AppContext;

    const call = () => {
        window.open(`tel:${phoneText}`);
    }
    const mail = () => {
        window.open(`mailto:${emailText}`);
    }
    const adress = () => {
        window.open(`https://www.google.com/maps/place/${adressText}`);
    }
    return (
        <>
            {(emailState || phoneState || adressState) && <div className='contact-container'>
                <h1>CONTACT US</h1>
                <div className='contact'>
                    {phoneState && <div className={`theme theme--${secondColor} box`} onClick={call}>
                        <img src='phone-call.png' alt='phone-call pic' />
                        <h2>{phoneText}</h2>
                    </div>}
                    {emailState && <div className={`theme theme--${secondColor} box`} onClick={mail}>
                        <img src='mail.png' alt='email pic' />
                        <h2>{emailText}</h2>
                    </div>}
                    {adressState && <div className={`theme theme--${secondColor} box`} onClick={adress}>
                        <img src='address.png' alt='address pic' />
                        <h2>{adressText}</h2>
                    </div>}
                </div>
            </div>}
        </>
    )
}

export default Contact;