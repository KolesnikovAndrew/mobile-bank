import React from "react";
import {
  AiOutlineHome,
  AiOutlineDollar,
  AiOutlineEnvironment,
  AiOutlineMessage,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", icon: AiOutlineHome, text: "Home" },
  { path: "/payments", icon: AiOutlineDollar, text: "Payments" },
  { path: "/city", icon: AiOutlineEnvironment, text: "City" },
  { path: "/chat", icon: AiOutlineMessage, text: "Chat" },
  { path: "/more", icon: AiOutlineEllipsis, text: "More" },
];

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-500" : "";
  };

  return (
    <nav className="bg-white p-4 w-full fixed inset-x-0 bottom-0">
      <div className="flex justify-center">
        <ul className="flex space-x-4">
          {navLinks.map(({ path, icon: Icon, text }) => (
            <li className="nav-item" key={path}>
              <Link
                className={`nav-link flex flex-col items-center ${isActive(
                  path
                )}`}
                to={path}
              >
                <Icon className={`${isActive(path)}`} />
                <span className={`mt-1 ${isActive(path)}`}>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
