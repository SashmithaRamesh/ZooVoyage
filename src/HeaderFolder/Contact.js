import React from 'react'
import vedio from '../asset/vedio.mp4';
import './Contact.css';
export default function Contact() {
  return (
    <div className='ved'>
      <video src={vedio} autoPlay loop muted/>
    </div>
  )
}
