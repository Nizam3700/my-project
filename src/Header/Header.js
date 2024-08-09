import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-removebg.png";

export function Header() {
  return (
    <Navbar fluid rounded className=" m-2 ">
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-10 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Ak's Amma Hospital
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link
            active
          >
            Home
          </Navbar.Link>
        </Link>
        <Link to="/about">
          <Navbar.Link >About</Navbar.Link>
        </Link>
        <Link to="/services">
          <Navbar.Link>Services</Navbar.Link>
        </Link>
        <Link to="/pricing">
          <Navbar.Link>Pricing</Navbar.Link>
        </Link>
        <Link to="/contact">
          <Navbar.Link>Contact</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
