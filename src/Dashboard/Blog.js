import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
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
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://e0.pxfuel.com/wallpapers/555/745/desktop-wallpaper-animals-lion-savannah-nature-background-for-android-lions-lion-lion-wild.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'ZOO LOCATION',
    description:
      '"Journey into the Heart of Wildlife at Our Zoo Location."',
    image: 'https://img.freepik.com/premium-photo/3d-rendering-isometric-house-christmas-transport-parks-halloween-mosque_1031432-4340.jpg?w=740',
    imageLabel: 'Image Text',
    url: '/location',
    click: 'Click for Zoo Location',
  },
  {
    title: 'DONATION',
    description:
      '"Every species saved is a victory for nature."',
    image: 'https://media.istockphoto.com/id/899748046/photo/orangutans.webp?b=1&s=170667a&w=0&k=20&c=aCT-IFPecktIJT8CFsqNpoAWe2TESERSo2J7pvhwvLQ=',
    imageLabel: 'Image Text',
    url: '/donation',
    click: 'Click To Donate',
  },
];

const sidebar = {
  title: 'Follow us',
  description: 'Stay connected with us through our social media channels.',
  social: [
  ],
};

const customTheme = createTheme({
  palette: {
    background: { 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function Blog() {
  return (
    <ThemeProvider theme={customTheme} className="main-background">
      <CssBaseline />

      <Container maxWidth="xl">
        <Header sections={sections} />

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
      <br></br>
      <br></br>
      <Footer>
      </Footer>
    </ThemeProvider>
  );
}