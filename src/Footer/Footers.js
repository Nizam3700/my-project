"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import img from "../assets/logo/logo-removebg.png";
import { Link } from "react-router-dom";

export function Footers() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand />
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                src={img}
                className="mr-3 h-10 sm:h-9"
                alt="Ak's Amma Hospital Logo"
              />
              <div className="flex flex-col">
                <span className="self-center whitespace-nowrap text-2xl font-bold italic text-purple-600 dark:text-white">
                  Ak's Amma Hospital
                </span>
                <span className="self-center text-red-500 text-lg italic font-semibold">
                  Super Speciality Services
                </span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Emergeny</Footer.Link>
                <Footer.Link href="#">Health Care</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/people/Aks-Amma-Hospital/pfbid02zhD5yiBPtuooNn1cN5grqKTefVCjKcah3NjbxS8NgKX4FDauRthnBSKCRbD9Rktbl/?mibextid=D4KYlr">Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/aksammahospital14/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Designed and Developed by Ak's Amma Hospital" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/people/Aks-Amma-Hospital/pfbid02zhD5yiBPtuooNn1cN5grqKTefVCjKcah3NjbxS8NgKX4FDauRthnBSKCRbD9Rktbl/?mibextid=D4KYlr" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/aksammahospital14/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
