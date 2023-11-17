import { useNavigate } from 'react-router-dom';

import RenterMain from './RenterMain';
import Header from '../Header/HeaderRenter';
import CustomFooter from '../Footer/Footer';
function Renter() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  console.log(token)
  if (!token) {
    navigate("/signin"); // Redirect to the sign-in page if there is no token
  }
  return (
    <div className=''>
      <Header />
      <RenterMain />
      <CustomFooter />
    </div>

  );
}

export default Renter;
