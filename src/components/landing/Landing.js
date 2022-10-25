import { useContext } from 'react';
import Context from '../../context/App.context';
import './Landing.scss';

const Landing = (props) => {
    const AppContext = useContext(Context)
    const { secondColor } = AppContext;
    return (
        <>
            <div className='landing-container'>
                <h1>Any <span className={`theme--${secondColor}`}>caffee</span> you want in one <span className={`theme--${secondColor}`}>place</span></h1>
                <p>Scroll down to see more</p>   
            </div>
        </>
    )
}

export default Landing;