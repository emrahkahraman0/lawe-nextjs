"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
  // Menü
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // Scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active
  const currentRoute = usePathname();

  return (
    <>
      <div id="header" className={scroll ? "scroll" : ""}>
        <div className="container">
          <div className="header">
            <div className="header_logo">
              <Link href="/">
                <Image
                  className="img_fluid"
                  src="/headerLogo.png"
                  width={250}
                  height={93}
                  priority
                  alt="Header Logo"
                />
              </Link>
            </div>
            {/* header_logo */}

            <ul ref={menuRef} className={`header_menu ${isOpen ? "open" : ""}`}>
              <li>
                <Link
                  className={currentRoute === "/" ? "active" : ""}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/about" ? "active" : ""}
                  href="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link
                      className={currentRoute === "/history" ? "active" : ""}
                      href="/history"
                      onClick={closeMenu}
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === "/faqs" ? "active" : ""}
                      href="/faqs"
                      onClick={closeMenu}
                    >
                      Faqs
                    </Link>
                  </li>
                </ul>
                {/* dropdown */}
              </li>
              <li>
                <Link
                  className={currentRoute === "/attorneys" ? "active" : ""}
                  href="/attorneys"
                  onClick={closeMenu}
                >
                  Attorneys
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/case-study" ? "active" : ""}
                  href="/case-study"
                  onClick={closeMenu}
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/practice-areas" ? "active" : ""}
                  href="/practice-areas"
                  onClick={closeMenu}
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/contact" ? "active" : ""}
                  href="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* header_menu */}

            <div
              className={`header_hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars icon bars"></i>
              <i className="fa-solid fa-xmark icon times"></i>
            </div>
            {/* header_hamburger */}
          </div>
          {/* header */}
        </div>
        {/* container */}
      </div>
      {/* header# */}
    </>
  );
}

export default Header;
