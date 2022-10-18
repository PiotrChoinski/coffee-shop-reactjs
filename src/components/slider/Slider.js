import './Slider.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Slider = (props) => {
    const AppContext = useContext(Context)
    const { sliderState, sliderText } = AppContext;

    return (
        <>
            { sliderState && <div className='slider-container'>
                <div className='text'>
                    <h1>{sliderText}</h1>
                </div>
                <div className='image'>
                    <img src='coding.svg' alt='coding' />
                </div>
            </div>}
        </>
    )
}

export default Slider;