import { Link } from 'react-router-dom';
import './AsideMenu.css'
import { ReactComponent as HomeIcon } from '../icons/home_icon.svg';
import { ReactComponent as CompassIcon } from '../icons/compas_icon.svg';


function AsideMenu() {

  return (
    <div className="AsideMenu">
      <ul>
        <li><Link to="/posts"><HomeIcon className="icon"/><span className='link-text'>Главная</span></Link></li>
        <li><Link><HomeIcon className="icon"/><span className='link-text'>Новости</span></Link></li>
        <li><Link><HomeIcon className="icon"/><span className='link-text'>Статьи</span></Link></li>
        <li><Link><CompassIcon className="icon"/><span className='link-text'>Обзоры</span></Link></li>
      </ul>
    </div>
  );
}
export default AsideMenu;
