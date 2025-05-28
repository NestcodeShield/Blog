import './Header.css';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import { ReactComponent as UserIcon } from '../icons/user-icon.svg';

function Header({ setIsModalOpen, isModalOpen}) {
  return (
    <div className="Header">
      <header>
        <nav>
          <ul>
            <li><Link to="posts" className='nav-buttons'>Лента</Link></li>
          </ul>
          <div className='search-block'>
            <input type='search' placeholder='Search'/>
          </div>
          <ul>
             <button onClick={() => setIsModalOpen(prev => !prev)} className='auth-buttons'><UserIcon className='user-icon'/></button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
