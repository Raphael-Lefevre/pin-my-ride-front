import { useHistory } from 'react-router-dom';

function CheckToken() {
  const history = useHistory();
  const token = localStorage.getItem('token');

  if (!token) {
    return history.push('/');
  }
  return history.push('/user');
}

export default CheckToken;
