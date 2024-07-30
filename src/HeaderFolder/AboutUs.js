import React from 'react';
import './AboutUs.css';

const AboutUs = () => {

  return (
    <div className='about'>
      <div>
        <br></br>
        <h2 className='ab'>ABOUT US</h2>
      </div>
      <div className="about-us-container">
        <div className="about-us-content">
          <section className="history-section">
            <h2 className='a'>HISTORY</h2>
            <p className='par'>
              Founded in 1920, our zoo has been a beacon of wildlife conservation
              and education for over a century. Our mission has always been to
              provide a sanctuary for endangered species while educating the
              public about the importance of biodiversity.
            </p>
            <p className='par'>
              Animals like Tiger, Brow-antlered deer, Lion Tailed Macaque, Nilgiri Langur, Four Horned Antilope, Indian Rhino, Wild Ass, Indian Lion, Himalayan Black bear, Crocodile, Pheasants, Emu, Rosy Pelican, Painted Stork, Sarus crane etc. have bred in the Past.
              Exotic species like Chimpanzee, Hamdrayas Baboon, African Rhino, Japanese Brown Bear, Eland , Cape Buffalo, Water Buck, etc also bred in the park.
            </p>
            <p className='par'>
              Conservation breeding of four endangered species (Asiatic Lion, Bengal Tiger, Indian Rhinoceros & Sangai Deer)
              Twenty Black Bucks were released in wild at Asola Wildlife Sanctuary.
            </p>
          </section>
          
          <section className="management-section">
            <h2 className='a'>MANAGEMENT</h2>
            <p className='par'>
              Our dedicated management team comprises professionals with extensive
              experience in wildlife conservation, veterinary sciences, and
              environmental education.
               We are committed to maintaining the highest
              standards of care and ethical practices.
            </p>
          </section>
        </div>
        <div className="about-us-content">
          <h2 className='achi'>ACHIEVEMENTS</h2>
          <section>
            <ul className='ul'>
              <li>The problem of water logging NZP improved by way of maintaining proper sewerage system.</li>
              <li>The animals enclosures retained in proposed plan are improved/up graded as per requirement.</li>
              <li>Director’s Offices building upgraded.Segregation of visitor/service vehicles and simplicity in way finding completed.</li>
              <li>New aviary constructed and opened for visitors.</li>
              <li>CCTV for surveillances completed at entry gate and Zoo hospital.</li>
              <li>Drinking water point upgraded by water purifiers and water coolers.</li>
            </ul>
          </section>

          <section className="achievements-section">
            <h2 className='awar'>AWARDS</h2>
            <ul className='ul'>
              <li>Successfully bred and reintroduced 50 endangered species into the wild.</li>
              <li>Awarded the Global Conservation Prize in 2015.</li>
              <li>Opened a state-of-the-art veterinary care center in 2018.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
