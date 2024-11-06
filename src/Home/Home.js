import React from "react";
import Cards from "../Card/Cards";
import img1 from "../assets/Header/image.png";
import doc1 from "../assets/home/doc1.png";
import Stats from "../Compount/Stats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faTruckMedical,
  faPhoneVolume,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import DocImg from "../Compount/DocImg";
import Insurance from "../Compount/Insurance";
import ElfsightWidget from "../Compount/ElfsightWidget";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <section>
        {/* Intro start */}
        <section className="relative">
          <div>
            <img
              className="h-auto max-w-full z-0"
              id="introImg"
              src={img1}
              alt="HomeImage"
            />

            {/* Overlay Text */}
            <div className="absolute top-1 left-2 w-full h-full flex flex-col z-10 text-white">
              <h1
                className="text-2xl font-bold italic sm:text-4xl sm:mt-3 md:text-5xl md:mt-2 lg:text-6xl lg:mt-3 xl:text-6xl xl:mt-8 xl:ml-6"
                style={{ color: "red" }}
              >
                Get Appointment
              </h1>
              <h2 className="text-2xl font-bold italic mt-1.5 ml-3 sm:text-4xl sm:mt-4 md:text-5xl md:mt-4 lg:text-6xl lg:mt-8 xl:text-6xl xl:mt-10 xl:ml-8">
                Anytime
              </h2>
              <h3
                className="text-2xl font-bold italic mt-1.5 ml-3 sm:text-4xl sm:mt-4 md:text-5xl md:mt-4 lg:text-6xl lg:mt-8 xl:text-6xl xl:mt-14 xl:ml-8"
                style={{ color: "black" }}
              >
                With Doctor
              </h3>
            </div>

            {/* Book Now Button */}
            <div className="absolute bottom-3 left-5 sm:bottom-10 xl:top-96 xl:ml-6">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:px-10 sm:py-3 sm:text-xl md:text-2xl md:px-12 md:py-4 lg:text-4xl lg:px-16 lg:py-6 xl:text-4xl xl:px-12 xl:py-5"
                id="book"
              >
                Book Now
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  style={{ color: "#fff" }}
                  className="h-5 pl-2 xl:h-10 ml-2"
                />
              </button>
            </div>
          </div>
        </section>
        {/* Intro end */}

        {/* cards start  */}
        <section
          className="m-4 my-2 2xl: flex justify-evenly relative bottom-20"
          id="schdule"
        >
          <Cards
            faIcon={faPhoneVolume}
            caption="Emergency Service & Contact Us"
            heading="+91 90632 63108"
            description="Contact Us for Any queries"
            RedirectText="Call Now"
            redirect="tel:+919063263108"
          />

          <Cards
            heading="Book Appointment"
            description="Just message in Whatsapp Book Now"
            RedirectText="Book Appointment"
            caption="24 Hours Service"
            faIcon={faUser}
            redirect="https://api.whatsapp.com/send/?phone=9063263108&text&type=phone_number&app_absent=0"
          />

          <Cards
            faIcon={faTruckMedical}
            caption="Ambulance Service Available"
            heading="Emergency 24/7 Service"
            description="Just Call Us"
            RedirectText="Contact Now"
            redirect="tel:+919063263108"
          />
        </section>

        {/* cards end  */}

        {/* Doctor section start  */}
        <div>
          <h1 className="2xl: text-4xl font-bold flex justify-center -mt-14 mb-9 text-red-600 underline">
            Meet Our Specialist Doctor’s
          </h1>
        </div>
        <section className="flex justify-evenly gap-14 mr-28 ml-28">
          {/* Doctor images  */}
          <div className="inline-flex ">
            <DocImg />
          </div>
          {/* Doctor images  */}

          <div className=" grid grid-cols-1 w-dvw">
            <div className="mt-20">
              <h1 className="font-sans font-bold text-4xl italic text-purple-900 flex justify-center -mb-20">
                Personal Care <br /> & Health Living
              </h1>
              <p className="text-xl font-serif w-auto justify-center text-justify ml-12 mt-28 text-gray-600">
                <span className="font-semibold text-red-700">
                  Ak's Amma Hospital,{" "}
                </span>
                we bring together a team of dedicated specialists in
                Neurosurgeon, Pulmonologist, Allergic Specialist and
                Obstetrician & Gynecologist, Infertility Specialist to provide
                compassionate and expert care. With Dr.Kalyan Babu,MBBS,DNB &
                Dr.A.Ashok Kumar,MBBS,MD and Dr.K.Jayasri,MBBS,MS our hospital
                is committed to delivering personalized solutions for complex
                neurological, respiratory, and women’s health needs & other
                health issues. Your health and well-being are our priority as we
                support you on every step of your journey to wellness.
              </p>
            </div>

            <div className="flex">
              <Link to={"/doctors"}>
              <button className="mt-10 ml-14 bg-pink-600 text-lg h-12 w-36 rounded-full text-white font-bold hover:bg-cyan-900 hover:text-black focus:ring-4 focus:outline-none focus:ring-pink">
                Doctors
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="sm"
                  className="ml-2 mr-2"
                  />
              </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Doctor section start  */}

        <Stats/>

        {/* insurance start  */}
        <Insurance />
        {/* insurance end  */}

        {/* google review  */}
        <ElfsightWidget />
        {/* google review  */}
      </section>
    </>
  );
}

export default Home;
