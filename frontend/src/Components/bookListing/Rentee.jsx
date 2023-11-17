// import { Route, Routes } from 'react-router-dom';
import Header from '../Header/HeaderRenter';
import CustomFooter from "../Footer/Footer";
// import La from './ContentRentee';
import ContentRentee from "./ContentRentee";

function Rentee() {

  return (
    <div className=''>
      <Header />

      <ContentRentee />

      <CustomFooter />
    </div>
  );
}

export default Rentee;
