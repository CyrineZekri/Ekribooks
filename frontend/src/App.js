import './App.css';
import './bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Sign/SignUp';
import SignIN from './Components/Sign/SignIn';
import Land from './Components/LandingPage/Land';
import Rentee from './Components/bookListing/Rentee';
import Renter from './Components/bookListing/Renter';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIN />} />
          <Route path="/renter" element={<Renter />} />
          <Route path="/rentee" element={<Rentee />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;