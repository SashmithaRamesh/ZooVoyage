import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './FirstPage/Login';
import Register from './FirstPage/Register';
import Blog from './Dashboard/Blog';
import AboutUs from './HeaderFolder/AboutUs';
import Adoptation from './HeaderFolder/Adoptation';
import AnimalBirds from './HeaderFolder/AnimalBirds';
import Contact from './HeaderFolder/Contact';
import VisitorInformation from './HeaderFolder/VisitorInformation';
import ZooEvents from './HeaderFolder/ZooEvents';
import ZooDonation from './Donation/ZooDonation';
import ZooLocation from './Location/ZooLocation';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/adopt' element={<Adoptation />} />
            <Route path='/animal' element={<AnimalBirds />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/visitor' element={<VisitorInformation />} />
            <Route path='/events' element={<ZooEvents />} />
            <Route path='/donation' element={<ZooDonation />} />
            <Route path='/location' element={<ZooLocation />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
