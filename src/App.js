import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './Dashboard/Blog';
import AboutUs from './HeaderFolder/AboutUs';
import Publication from './HeaderFolder/Adoption';
import Report from './HeaderFolder/Report';
import Resort from './HeaderFolder/Resort';
import ZooEvents from './HeaderFolder/ZooEvents';
import ZooDonation from './Donation/ZooDonation';
import ZooLocation from './Location/ZooLocation';
import { ChakraProvider, theme } from '@chakra-ui/react';
import VideoCarousel from './components/VideoCarousel';
import { UserProvider } from './FirstPage/UserContext';
import Profile from './FirstPage/Profile';
import Booking from './ZooTicket/Booking';
import BookingForm from './ZooTicket/BookingForm';
import Cart from './ZooTicket/Cart';
import PaymentPage from './ZooTicket/PaymentPage';
import { CartProvider } from './ZooTicket/CartContext';
import Adoption from './HeaderFolder/Adoption';
import GetStarted from './Dashboard/GetStarted';


function App() {
  return (
    <UserProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<GetStarted/>}/>
                <Route path='/home' element={<Blog/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/about' element={<AboutUs />} />
                <Route path='/publication' element={<Publication />} />
                <Route path='/report' element={<Report />} />
                <Route path='/resort' element={<Resort />} />
                <Route path='/events' element={<ZooEvents />} />
                <Route path='/donation' element={<ZooDonation />} />
                <Route path='/location' element={<ZooLocation />} />
                <Route path='/video' element={<VideoCarousel />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/bookingform' element={<BookingForm />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<PaymentPage />} />
                <Route path='/adoption' element={<Adoption />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ChakraProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
