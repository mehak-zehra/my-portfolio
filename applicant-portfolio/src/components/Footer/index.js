import React from 'react';

function Footer() {
  return (
    <footer className="mt-5">
        <div className="pb-2 pt-2">
          <ul className="footer-list" >
            <li >
              <img src="assets/images/envelope-solid.svg" width="25" height="25" className="mr-2"/>mehak.rizvi.786@gmail.com
            </li>
            <li>
              <img src="assets/images/phone-solid.svg" width="25" height="25" className="mr-2"/>510-555-5555
            </li>
            <li>
              <img src="assets/images/github-alt-brands.svg" width="25" height="25" className="mr-2"/>
              <a href="https://www.github.com/mehak-zehra/" target="_blank">Github </a>
            </li>
            <li>
              <img src="assets/images/linkedin-brands.svg" width="25" height="25" className="mr-2"/>
              <a href="https://www.linkedin.com/in/mehakzehra/" target="_blank">Linkedin</a>
            </li>
          </ul>
          &copy; 2022 Mehak Zehra, Inc.
        </div>
      </footer>
  );
}

export default Footer;