import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
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
            <li><Link to="auth/login" className='auth-buttons'>Вход</Link></li>
            <li><Link to="auth/register" className='auth-buttons'>Регистрация</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
