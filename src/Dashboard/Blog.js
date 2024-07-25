import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'ABOUT US', url: '/about'},
  { title: 'VISITOR INFORMATION', url: '/visitor' },
  { title: 'ANIMAL AND BIRDS', url: '/video' },
  { title: 'ZOO EVENTS', url: '/events' },
  { title: 'ANIMAL ADOPTATION', url: '/adopt' },
  { title: 'CONTACT', url: '/contact' },
];

const mainFeaturedPost = {
  title: 'Welcome To Zoo Voyage!',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: '',
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
      '"Every species saved is a victory for nature,A testament to our commitment to the wild."',
    image: 'https://img.freepik.com/free-vector/animals-standing-earth-planet_1308-128755.jpg?t=st=1721802549~exp=1721806149~hmac=532a102f362ba3ec142608e008e2048a2bd1968b00d3cd5040edf96fef4fd5f2&w=740',
    imageLabel: 'Image Text',
    url: '/donation',
    click: 'Click To Donate',
  },
];

const sidebar = {
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const customTheme = createTheme({
  palette: {
    background: {
      default: '#fadfbe', // Customize the default background color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Customize the default font family
  },
});

export default function Blog() {
  return (
    <ThemeProvider theme={customTheme} className="main-background">
      <CssBaseline />

      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}