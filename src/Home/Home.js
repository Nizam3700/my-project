import React from 'react'
import Cards from '../Cards'
import img1 from '../assets/Header/image.png'
import card1 from '../assets/home/247.png'

function Home() {
  return (
    <>
    {/* Intro start  */}
    <section>
    <div>
        <img class="h-auto max-w-full hidden md:block md: -z-0" src={img1} alt="HomeImage"/>
        
        <h2 className=' p-4 text-2xl font-bold text-cyan-500 italic '>Always here</h2>
        <h1 className="pl-3 text-4xl font-bold text-red-700 italic m-5">
          Get Appointment <br className=' m-2' /> With Our <br className='m-1' /> Specalized Doctors</h1>
    </div>
    </section>
    {/* Intro end  */}

    <section className='m-4'>
      <Cards 
      photo={card1}
      caption="24 Hours Service"
      heading="Book Appointment"
      description="Just message in whatsapp book Appointment"
      buttonText="Book Now"
      href="/appointment"/>

      <Cards 
      photo={card1}
      caption="24 Hours Service"
      heading="Book Appointment"
      description="Just message in whatsapp book Appointment"
      buttonText="Book Now"
      href="/appointment"/>

      <Cards 
      photo={card1}
      caption="24 Hours Service"
      heading="Book Appointment"
      description="Just message in whatsapp book Appointment"
      buttonText="Book Now"
      href="/appointment"/>
    </section>
    </>
  )
}

export default Home