import React, { useState } from 'react'
import './Section5BestDeal.css'
import SceduleCommon from './../SceduleCommon/SceduleCommon'

export default function Section5BestDeal() {

    const [toggle, setToggle] = useState(1)

    function updateToggle(id){
        setToggle(id)
    }

  return (
    <section className='SectionBestDeal'>
        <div className='BestDeal-TopPart'>
            <div>
                <h3 className='CommonTitle'>BEST DEAL</h3>
                <p className='BestDeal-Par'>Find Your Best Deal Right Now!</p>
            </div>
            <div className='BestDeal-ButtonPart'>
                <button onClick={()=> updateToggle(1)}>Appartment</button>
                <button onClick={()=> updateToggle(2)}>Villa House</button>
                <button onClick={()=> updateToggle(3)}>Penthouse</button>
            </div>
        </div>
        <div className= {toggle === 1 ? 'BestDeal-BottomPart' : 'BestDeal-BottomPart content'} >
            <ul className='BestDealCard'> 
                <div>
                    <li>Total Flat Space</li>
                    <span>185 m2</span>
                </div>
                <div>
                    <li>Floor number</li>
                    <span>26 th</span>
                </div>
                <div>
                    <li>Number of rooms</li>
                    <span>4</span>
                </div>
                <div>
                    <li>Parking of rooms</li>
                    <span>Yes</span>
                </div>
                <div>
                    <li>Payment Process</li>
                    <span>Bank</span>
                </div> 
            </ul>
                <img src = './public/images/property-05.jpg' alt='image' width={430} className='Img-BestDeal'></img>
                <div className='BestDealInfo'>
                    <h3>Extra Info About Property</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur fugiat quis quia hic autem, saepe repudiandae placeat tempora nisi delectus labore repellat rerum corporis velit, cumque a animi pariatur?</p>
                    <p>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                    <SceduleCommon  />
                </div>
        </div>
        <div className= {toggle === 2 ? 'BestDeal-BottomPart' : 'BestDeal-BottomPart content'} >
            <ul className='BestDealCard'> 
                <div>
                    <li>Total Flat Space</li>
                    <span>200 m2</span>
                </div>
                <div>
                    <li>Floor number</li>
                    <span>27 th</span>
                </div>
                <div>
                    <li>Number of rooms</li>
                    <span>9</span>
                </div>
                <div>
                    <li>Parking of rooms</li>
                    <span>No</span>
                </div>
                <div>
                    <li>Payment Process</li>
                    <span>Bank</span>
                </div> 
            </ul>
                <img src = './public/images/property-06.jpg' alt='image' width={430} className='Img-BestDeal'></img>
                <div className='BestDealInfo'>
                    <h3>More Info About Villa</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur fugiat quis quia hic autem, saepe repudiandae placeat tempora nisi delectus labore repellat rerum corporis velit, cumque a animi pariatur?</p>
                    <p>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                    <SceduleCommon  />
                </div>
        </div>
        <div className= {toggle === 3 ? 'BestDeal-BottomPart' : 'BestDeal-BottomPart content'} >
            <ul className='BestDealCard'> 
                <div>
                    <li>Total Flat Space</li>
                    <span>500 m2</span>
                </div>
                <div>
                    <li>Floor number</li>
                    <span>69 th</span>
                </div>
                <div>
                    <li>Number of rooms</li>
                    <span>3</span>
                </div>
                <div>
                    <li>Parking of rooms</li>
                    <span>Yes</span>
                </div>
                <div>
                    <li>Payment Process</li>
                    <span>Bank</span>
                </div> 
            </ul>
                <img src = './public/images/property-04.jpg' alt='image' width={430} className='Img-BestDeal'></img>
                <div className='BestDealInfo'>
                    <h3>All about Proberty</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur fugiat quis quia hic autem, saepe repudiandae placeat tempora nisi delectus labore repellat rerum corporis velit, cumque a animi pariatur?</p>
                    <p>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                    <SceduleCommon  />
                </div>
        </div>
        
    </section>
  )
}
