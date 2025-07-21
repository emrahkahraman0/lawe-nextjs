import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <>
      <div id="topbar">
        <div className="container">
          <div className="topbar">
            <div className="topbar_info">
              <div className="topbar_info_item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:0761654-123987">(0761) 654-123987</a>
              </div>
              <div className="topbar_info_item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:hellolawe@Lawyer.com">hellolawe@Lawyer.com</a>
              </div>
            </div>
            {/*topbar_info*/}
            <ul className="topbar_social">
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
            </ul>
            {/*topbar_social*/}
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
