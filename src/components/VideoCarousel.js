import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import anivid1 from './videos/anivid1.mp4';
import anivid2 from './videos/anivid2.mp4';
import anivid3 from './videos/anivid3.mp4';
import anivid4 from './videos/anivid4.mp4';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpg';
import birdvid1 from './videos/birdvid1.mp4';
import birdvid2 from './videos/birdvid2.mp4';
import birdvid3 from './videos/birdvid3.mp4';
import birdvid4 from './videos/birdvid4.mp4';
import ReactPlayer from "react-player";
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { keyframes } from '@mui/system';
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {

  const glitter = keyframes`
  0%, 100% {
    opacity: 12;
    transform: scale(1);
  }
  50% {
    opacity: 1.6;
    transform: scale(1.2);
  }
`;

  const AnimalVideoProperties = [
    {
      id: 1,
      src: anivid1,
    },
    {
      id: 2,
      src: anivid2,
    },
    {
      id: 3,
      src: anivid3,
    },
    {
      id: 4,
      src: anivid4,
    },
  ];

  const BirdsVideoProperties = [
    {
      id: 1,
      src: birdvid1,
    },
    {
      id: 2,
      src: birdvid2,
    },
    {
      id: 3,
      src: birdvid3,
    },
    {
      id: 4,
      src: birdvid4,
    },
  ];

  const ImgProperties = [
    {
      id: 1,
      src: img1,
      type: "image",
    },
    {
      id: 2,
      src: img2,
      type: "image",
    },
    {
      id: 3,
      src: img3,
      type: "image",
    },
    {
      id: 4,
      src: img4,
      type: "image",
    },
  ];

  return (
    <div className="ac">
      <header className="hed">
        <br></br>
        <h5>ZOO VOYAGE - EVENTS</h5>
        <br></br>
      </header>
      <main className="ma">
        <div className="carousel-con">
          <table className="tabheading">
              <tr>
                <td><b>ANIMALS</b></td>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td><b>WILDLIFE SANCTUARIES</b></td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td><b>BIRDS</b></td>
              </tr>
          </table>

          <br></br>

          <table className="tab">
              <tr>
                <td>
                <Carousel>
                  {AnimalVideoProperties.map((videoObj) => {
                    return (
                      <Carousel.Item key={videoObj.id}>
                        <ReactPlayer
                          url={videoObj.src}
                          pip={true}
                          controls={true}
                          playing={true}
                          width="400px"
                          height="200px"
                          />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
                </td>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <td>
                <Carousel>
                  {ImgProperties.map((ImgObj) => {
                    return (
                      <Carousel.Item key={ImgObj.id}>
                        <img
                          src={ImgObj.src}
                          alt={ImgObj.title}
                          pip={true}
                          width="400px"
                          height="300px"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
                </td>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <td>
                <Carousel>
                  {BirdsVideoProperties.map((videoObj) => {
                    return (
                      <Carousel.Item key={videoObj.id}>
                        <ReactPlayer
                          url={videoObj.src}
                          pip={true}
                          controls={true}
                          playing={true}
                          width="400px"
                          height="200px"
                          />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
                </td>
              </tr>
          </table>

          <br></br>

          <table className="q">
            <tr>
              <td className="but"><button>View More</button></td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className="but"><button>View More</button></td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className="but"><button>View More</button></td>
            </tr>
          </table>
        </div>
      </main>
      <footer className="footer">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener">
            <FacebookIcon sx={{ 
              color: '#363811',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener">
            <TwitterIcon sx={{ 
              color: '#363811',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener">
            <InstagramIcon sx={{ 
              color: '#363811',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
        </div>
        <br></br>
        <p>© 2024 Zoo Voyage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VideoCarousel;
