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
import { ChakraProvider, theme } from '@chakra-ui/react';
import VideoCarousel from './components/VideoCarousel';
import { UserProvider } from './FirstPage/UserContext';
import Login from './FirstPage/Login';
import Register from './FirstPage/Register';
import Profile from './FirstPage/Profile';
import Booking from './ZooTicket/Booking';
import BookingForm from './ZooTicket/BookingForm';
import Cart from './ZooTicket/Cart';
import PaymentPage from './ZooTicket/PaymentPage';
import { CartProvider } from './ZooTicket/CartContext';
import Adoption from './HeaderFolder/Adoption';
import GetStarted from './Dashboard/GetStarted';
import WhatsAppBooking from './ZooTicket/WhatsAppBooking';
import FirebaseImg from './FireBase/FirebaseImg';
import Wchat from './ZooTicket/Wchat';
import ResortBook from './HeaderFolder/ResortBook';
import MapEmbed from './Location/MapEmbed';


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
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/about' element={<AboutUs />} />
                <Route path='/publication' element={<Publication />} />
                <Route path='/report' element={<Report />} />
                <Route path='/resort' element={<Resort />} />
                <Route path="/resortbook" element={<ResortBook />} />
                <Route path='/events' element={<ZooEvents />} />
                <Route path='/donation' element={<ZooDonation />} />
                <Route path='/location' element={<MapEmbed />} />
                <Route path='/video' element={<VideoCarousel />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/whatsapp' element={<WhatsAppBooking/>} />
                <Route path='/wchat' element={<Wchat/>} /> 
                <Route path='/booking' element={<Booking />} />
                <Route path='/bookingform' element={<BookingForm />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<PaymentPage />} />
                <Route path='/adoption' element={<Adoption />} />
                <Route path='/vlog' element={<FirebaseImg/>} />
              </Routes>
            </BrowserRouter>
          </div>
        </ChakraProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
