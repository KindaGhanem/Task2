import './Section7ContactUs.css'
import TitleCommon from './../TitleCommon/TitleCommon'
import ButtonScedule from '../ButtonScedule/ButtonScedule'

export default function Section7ContactUs() {
  return (
    <section className='SectionContactUs' id='contact'>
        <TitleCommon title='Contact US' />
        <p className='ContactPar'>Get In Touch With Our Agent</p>
        <div className='ContactPart2'>
            <div className='ContactItems'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10044.414642261678!2d36.58099833641784!3d34.459052459588484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15225652b6ab7055%3A0x434575b848dc3fa1!2z2KfZhNiy2LHYp9i52KnYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1723941485108!5m2!1sar!2s" width="600" height="480"></iframe>
                <div className='ContactCard'>
                    <div className='ContactCardPart1'>
                        <img src='./public/images/phone-icon.png' alt='image-phone'></img>
                        <div>
                            <span>010-020-0340</span>
                            <p>Phone Number</p>
                        </div>
                    </div>
                    <div className='ContactCardPart1'>
                        <img src='./public/images/email-icon.png' alt='image-phone'></img>
                        <div>
                            <span>010-020-0340</span>
                            <p>Phone Number</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className='ContactForm'>
                <label>FULL Name</label>
                <input type='text' placeholder='Your Name ...'></input>
                <label>Email Address</label>
                <input type='email' placeholder='Your E-mail ...'></input>
                <label>FULL Name</label>
                <input type='text' placeholder='Subject ...'></input>
                <label>Message</label>
                <textarea placeholder='Your Message'></textarea>
                <ButtonScedule title=' Send Message' />
            </form>
        </div>
    </section>
  )
}
