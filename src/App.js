import { BrowserRouter, Routes, Route} from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<Blog/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/about' element={<AboutUs/>}></Route>
                <Route path='/adopt' element={<Adoptation/>}></Route>
                <Route path='/animal' element={<AnimalBirds/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/visitor' element={<VisitorInformation/>}></Route>
                <Route path='/events' element={<ZooEvents/>}></Route>
                <Route path='/donation' element={<ZooDonation/>}></Route>
                <Route path='/location' element={<ZooLocation/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
