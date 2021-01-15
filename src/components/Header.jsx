import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import { API_URL } from '../env';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tokenJwt, setTokenJwt, user, setUser, email, setEmail  } = useContext(UserContext);
  console.log(tokenJwt);

  const history = useHistory();


  useEffect(() => {
    axios.get(`${API_URL}/users`).then((res) => {
      console.log(res.data);
      const currentUser = res.data.filter((user)=> {
        return user
      })
  
  }, [media]);
    });
  }, []);

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
              Username {user.firstname}
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
