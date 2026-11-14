import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <>
      <div id="topbar">
        <div className="container">
          <div className="topbar">
            <div className="topbar_left">
              <div className="topbar_left_item">
                <i className="fa-solid fa-phone"></i>
                <Link href="tel:+901234567890">+90 123 456 78 90</Link>
              </div>
              <div className="topbar_left_item">
                <i className="fa-solid fa-envelope"></i>
                <Link href="mailto:info@company.com">info@company.com</Link>
              </div>
            </div>
            {/*topbar_left*/}
            <ul className="topbar_right">
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
            </ul>
            {/*topbar_right*/}
          </div>
          {/*topbar*/}
        </div>
        {/*container*/}
      </div>
      {/*topbar#*/}
    </>
  );
}

export default Topbar;
