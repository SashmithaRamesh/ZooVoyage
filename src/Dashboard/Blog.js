/*import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Login from '../FirstPage/Login';
import Register from '../FirstPage/Register';
import Modal from '@mui/material/Modal';
import './Blog.css';

const sections = [
  { title: 'ABOUT US', url: '/about'},
  { title: 'NEARBY RESORT ', url: '/resort' },
  { title: 'ANIMAL AND BIRDS', url: '/video' },
  { title: 'ZOO EVENTS', url: '/events' },
  { title: 'ADOPTION', url: '/adoption' },
  { title: 'REPORT', url: '/report' },
];

const mainFeaturedPost = {
  title: 'Welcome To Zoo Voyage!',
  description: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://e0.pxfuel.com/wallpapers/555/745/desktop-wallpaper-animals-lion-savannah-nature-background-for-android-lions-lion-lion-wild.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'ZOO LOCATION',
    description: '"Journey into the Heart of Wildlife at Our Zoo Location."',
    image: 'https://img.freepik.com/premium-photo/3d-rendering-isometric-house-christmas-transport-parks-halloween-mosque_1031432-4340.jpg?w=740',
    imageLabel: 'Image Text',
    url: '/location',
    click: 'Click for Zoo Location',
  },
  {
    title: 'DONATION',
    description: '"Every species saved is a victory for nature."',
    image: 'https://media.istockphoto.com/id/899748046/photo/orangutans.webp?b=1&s=170667a&w=0&k=20&c=aCT-IFPecktIJT8CFsqNpoAWe2TESERSo2J7pvhwvLQ=',
    imageLabel: 'Image Text',
    url: '/donation',
    click: 'Click To Donate',
  },
];

const sidebar = {
  title: 'Follow us',
  description: 'Stay connected with us through our social media channels.',
  social: [],
};

const customTheme = createTheme({
  palette: {
    background: {},
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function Blog() {
  const [openModal, setOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to manage login/register

  const handleLoginClick = () => {
    setIsLogin(true);
    setOpenModal(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ThemeProvider theme={customTheme} className="main-background">
      <CssBaseline />
      <Container maxWidth="xl">
        <Header 
          sections={sections} 
          onLoginClick={handleLoginClick} 
          onRegisterClick={handleRegisterClick}  // Pass handleRegisterClick as a prop
        />

        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer />

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="auth-modal-title"
        aria-describedby="auth-modal-description"
      >
        <div className="modal-content">
          {isLogin ? (
            <Login onRegisterClick={handleRegisterClick} onClose={handleCloseModal} />
          ) : (
            <Register onLoginClick={handleLoginClick} onClose={handleCloseModal} />
          )}
        </div>
      </Modal>
    </ThemeProvider>
  );
}
*/


import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Profile from '../FirstPage/Profile';
import './Blog.css';

const sections = [
  { title: 'ABOUT US', url: '/about'},
  { title: 'NEARBY RESORT ', url: '/resort' },
  { title: 'ANIMAL AND BIRDS', url: '/video' },
  { title: 'ZOO EVENTS', url: '/events' },
  { title: 'ADOPTION', url: '/adoption' },
  { title: 'REPORT', url: '/report' },
];

const mainFeaturedPost = {
  title: 'Welcome To Zoo Voyage!',
  description: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://e0.pxfuel.com/wallpapers/555/745/desktop-wallpaper-animals-lion-savannah-nature-background-for-android-lions-lion-lion-wild.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'ZOO LOCATION',
    description: '"Journey into the Heart of Wildlife at Our Zoo Location."',
    image: 'https://img.freepik.com/premium-photo/3d-rendering-isometric-house-christmas-transport-parks-halloween-mosque_1031432-4340.jpg?w=740',
    imageLabel: 'Image Text',
    url: '/location',
    click: 'Click for Zoo Location',
  },
  {
    title: 'DONATION',
    description: '"Every species saved is a victory for nature."',
    image: 'https://media.istockphoto.com/id/899748046/photo/orangutans.webp?b=1&s=170667a&w=0&k=20&c=aCT-IFPecktIJT8CFsqNpoAWe2TESERSo2J7pvhwvLQ=',
    imageLabel: 'Image Text',
    url: '/donation',
    click: 'Click To Donate',
  },
];

const sidebar = {
  title: 'Follow us',
  description: 'Stay connected with us through our social media channels.',
};

const customTheme = createTheme({
  palette: {
    background: {},
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function Blog() {
  const [currentView, setCurrentView] = useState('home'); 

  const handleProfileClick = () => {
    setCurrentView(false);
  }


  return (
    <ThemeProvider theme={customTheme} className="main-background">
      <CssBaseline />
      <Container maxWidth="xl">
        <Header 
          sections={sections} 
          onProfileClick={handleProfileClick} 
        />

        {currentView === 'home' ? (
          <>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={4} sx={{ mt: 0 }}>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
              />
            </Grid>
          </>
        ) : (
          <Profile/>
        )}
      </Container>
      <br></br>
      <Footer />

    </ThemeProvider>
  );
}
