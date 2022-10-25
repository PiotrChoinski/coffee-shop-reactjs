import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from './../../context/App.context';
import './Header.scss';

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === 'ADMIN PANEL';
    const AppContext = useContext(Context);
    const { secondColor } = AppContext;

    return (
        <div className='header-container'>
            <div className={`header theme--${secondColor}`}>
                <h1>{props.title}</h1>
                {isAdmin
                ? <Link className='btn' to='/'><img src='home.png' alt='home icon'/></Link>
                : <Link className='btn btn--admin' to='/admin'><img src='settings.png' alt='settings icon'/></Link>}
            </div>
        </div>
    )
}

export default Header;