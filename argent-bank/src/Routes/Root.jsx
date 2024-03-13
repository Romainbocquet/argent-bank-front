import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import AccommodationDetail from '../pages/AccommodationDetail';
import Error404 from '../pages/Error404';
import User from '../pages/User';

const Root = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        {/*<Route path="/accommodation/:id" element={<AccommodationDetail />} /> */}
        <Route path="/*" element={<Error404 />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Root;