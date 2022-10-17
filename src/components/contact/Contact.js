import './Contact.scss';

const Contact = (props) => {
    return (
        <div className='contact-container'>
            <h1>CONTACT US</h1>
            <div className='contact'>
                <div>
                    <img src='phone-call.png' alt='phone-call pic' />
                    <h2>123 456 789</h2>
                </div>
                <div>
                    <img src='mail.png' alt='email pic' />
                    <h2>example@gmail.com</h2>
                </div>
                <div>
                    <img src='address.png' alt='address pic' />
                    <h2>Example 4/20</h2>
                </div>
            </div>
        </div>
    )
}

export default Contact;