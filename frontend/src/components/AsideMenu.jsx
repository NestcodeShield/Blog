import { Link } from 'react-router-dom';
import './AsideMenu.css'


function AsideMenu() {

  return (
    <div className="AsideMenu">
      <ul>
        <li><Link to="/posts">Главная</Link></li>
        <li><Link>Новости</Link></li>
        <li><Link>Статьи</Link></li>
        <li><Link>Обзоры</Link></li>
      </ul>
    </div>
  );
}
export default AsideMenu;
