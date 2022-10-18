import './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === 'ADMIN PANEL';


    return (
        <div className='header-container'>
            <div className='header'>
                <h1>{props.title}</h1>
                {isAdmin
                ? <Link className='btn' to='/'><img src='home.png' alt='home icon'/></Link>
                : <Link className='btn btn--admin' to='/admin'><img src='settings.png' alt='settings icon'/></Link>}
            </div>
        </div>
    )
}

export default Header;