import React from "react";
import Cards from "../Card/Cards";
import img1 from "../assets/Header/image.png";
import doc1 from "../assets/home/doc1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faCircleExclamation,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

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
                className="text-2xl font-bold italic sm:text-4xl sm:mt-3 md:text-5xl md:mt-2 lg:text-6xl lg:mt-3 xl:text-7xl xl:mt-6"
                style={{ color: "red" }}
              >
                Get Appointment
              </h1>
              <h2 className="text-2xl font-bold italic mt-1.5 ml-3 sm:text-4xl sm:mt-4 md:text-5xl md:mt-4 lg:text-6xl lg:mt-8 xl:text-7xl xl:mt-10">
                Anytime
              </h2>
              <h3
                className="text-2xl font-bold italic mt-1.5 ml-3 sm:text-4xl sm:mt-4 md:text-5xl md:mt-4 lg:text-6xl lg:mt-8 xl:text-7xl xl:mt-10"
                style={{ color: "black" }}
              >
                With Doctor
              </h3>
            </div>

            {/* Book Now Button */}
            <div className="absolute bottom-3 left-5 sm:bottom-10 ">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:px-10 sm:py-3 sm:text-xl md:text-2xl md:px-12 md:py-4 lg:text-4xl lg:px-16 lg:py-6 xl:text-5xl xl:px-20 xl:py-7"
                id="book"
              >
                Book Now
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  style={{ color: "#fff" }}
                  className="h-5 pl-2 xl:h-12 ml-2"
                />
              </button>
            </div>
          </div>
        </section>
        {/* Intro end */}

        <section className="m-4 my-2" id="schdule">
          <Cards
            faIcon={faPhoneVolume}
            caption="24 Hours Service"
            heading="+91 739618700"
            description="Contact Us for Any queries"
            RedirectText="Call Now"
            redirect="https://www.youtube.com/watch?v=bAqXuQOrvKA&t=7161s"
          />

          <Cards
            heading="Book Appointment"
            description="Just message in whatsapp book Appointment"
            RedirectText="Book Appointment"
            caption="24 Hours Service"
            faIcon={faUser}
            redirect="https://www.youtube.com"
          />

          <Cards
            faIcon={faCircleExclamation}
            caption="24 Hours Service"
            heading="Book Appointment"
            description="Just message in whatsapp book Appointment"
            buttonText="Book Now"
            href="/appointment"
          />
        </section>
      </section>
    </>
  );
}

export default Home;
