import React from "react";
import { Link } from "react-router-dom";

const Header = ({ ...otherProps }) => {
  return (
    <header>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/10/05/10/05/leaf-2818896_960_720.jpg" alt="logo" />
      </div>

      <nav>
        <ul>
          <li>
            <Link>Services</Link>
          </li>
        </ul>
        <li>
          <Link>About us</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
