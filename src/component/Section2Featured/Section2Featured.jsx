import React, { useState } from 'react'
import './Section2Featured.css'
import TitleCommon from '../TitleCommon/TitleCommon';

export default function Section2Featured() {


    const VillaFeature = [

        {
            id: 1,
            Image: './public/images/info-icon-01.png',
            title:'250 m2' ,
            text: "Total Flat Space",

        },
        {
            id: 2,
            Image: './public/images/info-icon-02.png',
            title:'Contract' ,
            text: "Contract Ready",
        },
        {
            id: 3,
            Image: './public/images/info-icon-03.png',
            title:'Payment' ,
            text: "Payment",
        },
        {
            id: 4,
            Image: './public/images/info-icon-04.png',
            title:'Safety' ,
            text: "24/7 Under",
        },
    ];


    const [AnswerOpen , setAnswerOpen] = useState(false)
    const [AnswerOpen2 , setAnswerOpen2] = useState(false)
    const [AnswerOpen3 , setAnswerOpen3] = useState(false)



  return ( 
    <section className='SectionFeatured'>
        <div> 
            <img src='./public/images/featured.jpg' alt='image-featured' className='ImageFeatured'></img>
            <div className='BG-Featured-Image'>
                <img src='./public/images/featured-icon.png' alt='image-featured-icon' ></img>
            </div>
        </div>
        <div className='Featured-Second-Part'>
            <TitleCommon title="FEATURED" />
            <p className='Featured-Second-Paragraph1'>Best Appartment & Sea View</p>
            <div className='Featured-Accordion'>

                <h5 className='Ask1' onClick={() => {setAnswerOpen(!AnswerOpen);} } >Best useful links ?</h5>
                <p className = {AnswerOpen ? "Answer1Show" : "Answer1" }> Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span>best free CSS template</span> in the world . Please tell your friends about it</p>

                <h5 className='Ask2' onClick={() => {setAnswerOpen2(!AnswerOpen2);} } >How does this work ?</h5>
                <p className = {AnswerOpen2 ? "Answer2Show" : "Answer2" }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ab.</p>

                <h5 className='Ask3' onClick={() => {setAnswerOpen3(!AnswerOpen3);} } >Why is Villa Agency the best ?</h5>
                <p className = {AnswerOpen3 ? "Answer3Show" : "Answer3" }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ab.</p>
            </div>
        </div>
        <div className='Feature-Card-All'>
        {VillaFeature.map((item) => (
            <div className='Feature-Card'>
            <img src={item.Image} alt='image'></img>
            <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
            </div>
        </div>







        ))}
        </div>
    </section>
  )
}
