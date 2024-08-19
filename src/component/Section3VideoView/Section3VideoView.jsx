
import React from 'react'
import './Section3VideoView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import TitleCommon from '../TitleCommon/TitleCommon'


export default function Section3VideoView() {
  return (
    <section className='SectionVideoView'>
        <TitleCommon title='VideoView' />
        <p>Get Closer View & Different Feeling</p>
        <img src='./public/images/video-frame.jpg' alt='image-video-frame'></img>
        <div className='BGPlayVideo'>< FontAwesomeIcon icon={faPlayCircle} className='PlayVideo' /></div>
    </section>
  )
}
