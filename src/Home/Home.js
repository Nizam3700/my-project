import React from 'react'
import Cards from '../Card/Cards'
import img1 from '../assets/Header/image.png'
import doc1 from '../assets/home/doc1.png'
// import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
    <section>

    {/* Intro start  */}
    <section>
    <div>
        <img class="h-auto max-w-full hidden md:block" id='introImg' src={img1} alt="HomeImage"/>
        
        <h2 className=' pl-5 text-xs font-bold italic' id='here'>Always here</h2>
        <div className="pl-3 text-2xl font-bold italic relative bottom-0 z-10" id='Appointment'>

        <h1 className=' ml-1 text-red-600' >
          Get Appointment</h1>
        <h1 className='mt-1 text-center'>
          Anytime</h1>
        <h1 className='mt-1 mr-3 text-right text-green-500'>With Our Doctor</h1>
        <img class="h-40 w-24 ml-3 mt-1 absolute -translate-y-1/2 z-[-1] md:relative md:translate-y-0 md:z-10" id='introImg' src={doc1} alt="HomeImage"/>
        <div className='flex justify-end mr-5'>
        <button type="button" class="text-white float-right text-right mt-4 md:ml-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id='book'>Book Now
        <FontAwesomeIcon icon={faCalendarCheck} style={{color: "#fff",}} className='h-5 pl-2' />
        </button>
        </div>
        </div>
        <div className="text-justify p-4 pl-3 mt-4 text-3xl font-bold italic m-5 " id='trust'>
        <p className=" text-sm text-gray-700">Your trusted healthcare partner, providing quality medical care with compassion and dedication.</p>
        <p className="text-sm text-gray-700">Our team of experienced doctors and medical professionals are committed to delivering exceptional patient care and support.</p>
        </div>

    </div>
    </section>
    {/* Intro end  */}

    <section className='m-4 my-2' id='schdule'>
      <Cards 
      faIcon={faPhoneVolume}
      caption="24 Hours Service"
      heading="+91 739618700"
      description="Contact Us for Any queries"
      RedirectText="Call Now"
      redirect="https://www.youtube.com/watch?v=bAqXuQOrvKA&t=7161s"/>

      <Cards 
      heading="Book Appointment"
      description="Just message in whatsapp book Appointment"
      RedirectText="Book Appointment"
      caption="24 Hours Service"
      faIcon={faUser}
      redirect="https://www.youtube.com"/>

      <Cards 
      faIcon={faCircleExclamation}
      caption="24 Hours Service"
      heading="Book Appointment"
      description="Just message in whatsapp book Appointment"
      buttonText="Book Now"
      href="/appointment"/>

    </section>
    </section>

    </>
  )
}

export default Home