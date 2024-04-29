import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const icons = {
    About: FaUser,
    Work: FaBriefcase,
    Skill: FaCode,
    Project: FaProjectDiagram,
    Contact: FaEnvelope,
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-gradient-left via-gradient-bottom to-gradient-right`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className={`${styles.navText} text-[24px]`}>Pratik Mishra</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => {
            const Icon = icons[link.title];
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white transition-colors duration-300`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`} className="flex items-center gap-2">
                  <Icon className="w-6 h-6" />
                  <span>{link.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = icons[link.title];
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white transition-colors duration-300`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`} className="flex items-center gap-2">
                      <Icon className="w-6 h-6" />
                      <span>{link.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
