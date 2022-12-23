import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logOut } from '../../store/currentUser.slice';

export const NavBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.currentUser).userInfo;
  const logout =()=>{
    dispatch(logOut());
  }
  return (
    <section id="header">
      <nav className="row">
        <div className="col-3">
          <div className="logo ">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="col-5">
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="cart-login">
            <ul>
              <li>
                <Link to="/cart"> Cart
                <FontAwesomeIcon icon={faCartShopping} />{' '}</Link>

              </li>
              <li>
              {currentUser ? currentUser.name  :
                 <Link to="/login">
                Login 
                <FontAwesomeIcon icon={faUserPlus} />
                </Link>}
              </li>
              <li onClick={logout}>
                {currentUser ? "Logout"  :
                " "
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
