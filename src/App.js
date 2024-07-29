import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './FirstPage/Login';
import Register from './FirstPage/Register';
import Blog from './Dashboard/Blog';
import AboutUs from './HeaderFolder/AboutUs';
import Publication from './HeaderFolder/Publication';
import Report from './HeaderFolder/Report';
import NearbyResort from './HeaderFolder/NearbyResort';
import ZooEvents from './HeaderFolder/ZooEvents';
import ZooDonation from './Donation/ZooDonation';
import ZooLocation from './Location/ZooLocation';
import { ChakraProvider, theme } from '@chakra-ui/react';
import VideoCarousel from './components/VideoCarousel';
import { UserProvider } from './FirstPage/UserContext';
import Profile from './FirstPage/Profile';
import Booking from './Bookings/Booking';
import BookingForm from './ZooTicket/BookingForm';
import Cart from './ZooTicket/Cart';
import PaymentPage from './PaymentPage'; // Import the payment page
import { CartProvider } from './ZooTicket/CartContext';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Blog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/publication' element={<Publication />} />
                <Route path='/report' element={<Report />} />
                <Route path='/resort' element={<NearbyResort />} />
                <Route path='/events' element={<ZooEvents />} />
                <Route path='/donation' element={<ZooDonation />} />
                <Route path='/location' element={<ZooLocation />} />
                <Route path='/video' element={<VideoCarousel />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/bookingform' element={<BookingForm />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<PaymentPage />} /> {/* Add the payment page route */}
              </Routes>
            </BrowserRouter>
          </div>
        </ChakraProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
