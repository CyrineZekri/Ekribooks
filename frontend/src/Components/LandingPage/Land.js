import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import CustomFooter from '../Footer/Footer';
import La from '../LandingPage/LandingPage';


function Land() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<La />} />
                </Routes>
            </main>
            <CustomFooter />
        </div>

    );
}

export default Land;