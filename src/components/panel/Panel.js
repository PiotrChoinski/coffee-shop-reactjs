import './Panel.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const AppContext = useContext(Context);
    const { sliderState, setSliderState, sliderText, setSliderText, mainColor, setMainColor } = AppContext;

    const setSliderStateHandler = () => {   
        setSliderState(!sliderState);
    }
    
    const setSliderTextHandler = (e) => {
        const text = e.target.value;
        setSliderText(text);
    }

    const setMainColorHandler = (e) => {
        const color = e.target.value;
        setMainColor(color)
    }

    return (
        <div className='panel-container'>
            <h2>Control Panel</h2>
            <ul>
                <li>
                    <p>Slider</p>
                    <input type='checkbox' value={sliderState} onChange={setSliderStateHandler} defaultChecked={sliderState} />
                </li>
                <li>
                    <p>Slides count</p>
                    <input type='text' defaultValue={sliderText} placeholder='Type text...' onChange={(e) => setSliderTextHandler(e)}/>
                </li>
                <li>
                    <p>Main color</p>
                    <input type='color' defaultValue={mainColor} onChange={(e) => setMainColorHandler(e)}/>
                </li>
            </ul>
        </div>
    )
}

export default Panel;