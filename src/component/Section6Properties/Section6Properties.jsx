import './Section6Properties.css'
import TitleCommon from '../TitleCommon/TitleCommon'
import ButtonScedule from './../ButtonScedule/ButtonScedule'

export default function Section6Properties() {
    const VillaCardsProperties = [

        {
            id: 1,
            img: './public/images/property-01.jpg',
            button:'Luxury Villa' ,
            price:'2.264.000$',
            title:'18 New Street Miami, OR 97219' ,
            num1: '8',
            num2: '8',
            num3: '545m2',
            num4: '3',
            num5:'6 spots' ,

        },
        {
            id: 2,
            img: './public/images/property-02.jpg',
            button:'Luxury Villa' ,
            price:'$1.180.000',
            title:'54 Mid Street Florida, OR 27001' ,
            num1: '6',
            num2: '5',
            num3: '450m2',
            num4: '3',
            num5:'8 spots' ,
        },
        {
            id: 3,
            img: './public/images/property-03.jpg',
            button:'Luxury Villa' ,
            price:'$584.500',
            title:'12 New Street Miami, OR 12650' ,
            num1: '4',
            num2: '3',
            num3: '125m2',
            num4: '25th',
            num5:'2 cars' ,
        },
        {
            id: 4,
            img: './public/images/property-04.jpg',
            button:'Penthouse' ,
            price:'$925.600',
            title:'34 Beach Street Miami, OR 42680' ,
            num1: '8',
            num2: '8',
            num3: '545m2',
            num4: '3',
            num5:'6 spots' ,
        },
        {
            id: 5,
            img: './public/images/property-05.jpg',
            button:'Modern Condo' ,
            price:'$450.000',
            title:'22 New Street Portland, OR 16540' ,
            num1: '3',
            num2: '2',
            num3: '165m2',
            num4: '26th',
            num5:'3 cars' ,
        },
        {
            id: 6,
            img: './public/images/property-06.jpg',
            button:'Luxury Villa' ,
            price:'$1.460.000',
            title:'26 Old Street Miami, OR 38540' ,
            num1: '5',
            num2: '4',
            num3: '225m2',
            num4: '3',
            num5:'10 spots' ,
        },
    ];

  return (
    <section className='SectionProberties' id='properties'>
        <TitleCommon title='PROPERTIES' />
        <p className='Properties-Par'>We Provide The Best Property You Like</p>
        <div className='PropertiesCardsAll'>
            {VillaCardsProperties.map((item) => (
                <div className='PropertiesCard'>
                    <img src={item.img} alt='imageProperties'></img>
                    <div className='ProCardInfo1'>
                        <button> {item.button} </button>
                        <p>{item.price}</p>
                    </div>
                    <h4>{item.title}</h4>
                    <ul className='PropItems'>
                        <li>Bedrooms:</li>
                        <span>{item.num1}</span>
                        <li>Bathroom:</li>
                        <span>{item.num2}</span>
                        <li>Area:</li>
                        <span>{item.num3}</span>
                        <li>Floor:</li>
                        <span>{item.num4}</span>
                        <li>Parking:</li>
                        <span>{item.num5}</span>
                    </ul>
                    <ButtonScedule title=' Schedule a visit' />
                    

                </div>


                ))}
        </div>



    </section>
  )
}
