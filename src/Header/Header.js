import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-removebg.png";
import blood from "../assets/home/Blood_donate.png";
import emerency from "../assets/home/247.png";

export function Header() {
  return (
    <Navbar fluid rounded className="m-2 text-2xl">
      <Navbar.Brand>
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={logo}
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
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button> */}
        <Link to="/">
          <img className="h-16 mt-2 mr-6 animate-pulse" src={emerency} alt="blood_donate" />
        </Link>
        <Link to="/" className="hidden lg:block">
          <img className="h-20 animate-pulse" src={blood} alt="blood_donate" />
        </Link>
        {/* </Button> */}
        <Navbar.Toggle />
      </div>
      {/* <div className="flex md:order-2">
        <Navbar.Toggle />
      </div> */}
      <Navbar.Collapse>
        <Link to="/" className="text-xl">
          <Navbar.Link active>Home</Navbar.Link>
        </Link>
        <Link to="/doctors" className="text-xl">
          <Navbar.Link>Doctors</Navbar.Link>
        </Link>
        <Link to="/depart" className="text-xl">
          <Navbar.Link>Departments</Navbar.Link>
        </Link>
        <Link to="/services" className="text-xl">
          <Navbar.Link>Services</Navbar.Link>
        </Link>
        <Link to="/contact" className="text-xl">
          <Navbar.Link>Contact Us</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
