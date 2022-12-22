import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export const Header = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser).userInfo;
  return (
    <section id="header">
      <nav>
        <div className="nav-bar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="cart-login">
            <ul>
              <li>
                Cart
                <FontAwesomeIcon icon={faCartShopping} />{' '}
              </li>
              <li>
                {currentUser ? currentUser.name  :
                 <Link to="/login">
                Login 
                <FontAwesomeIcon icon={faUserPlus} />
                </Link>}
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
