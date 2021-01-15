import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import { BsPersonSquare } from 'react-icons/bs';
import { FaPinterest } from 'react-icons/fa';
import UserContext from '../UserContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { tokenJwt, setTokenJwt, email, setProfil, profil } = useContext(
    UserContext
  );
  console.log(tokenJwt);

  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:5000/api/v0/users').then((res) => {
      console.log(res.data);
      console.log(email);
      const currentUser = res.data.filter((user) => {
        return user.email === email;
      });
      console.log(currentUser);
      setProfil(currentUser);
    });
  }, []);

  console.log('profil', profil);

  const handleSignOut = () => {
    localStorage.removeItem('token');

    axios.interceptors.request.use(
      (config) => {
        const { origin } = new URL(config.url);
        const allowedOrigins = ['http://localhost:5000'];
        if (allowedOrigins.includes(origin)) {
          // eslint-disable-next-line no-param-reassign
          config.headers.authorization = '';
          // eslint-disable-next-line no-param-reassign
          config.headers.userId = '';
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    setTokenJwt('');
    history.push('/');
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/" className="p-3">
          <FaPinterest size="4rem" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarBrand href="/user" className="m-3">
              <BsPersonSquare size="2rem" />
            </NavbarBrand>
            <NavItem>
              {/* <NavLink className="m-3">Se déconnecter</NavLink> */}
              <Button
                color="outline-info"
                className="m-3"
                onClick={() => handleSignOut()}
              >
                Se déconnecter
              </Button>
            </NavItem>
          </Nav>
          <NavbarText className="font-weight-bold p-3">PIN MY RIDE</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
