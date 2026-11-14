"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Topbar from "./Topbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const currentRoute = usePathname();

  // Hamburger
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
    setDropdownOpen(false);
  }

  // Dropdown
  function toggleDropdown(e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setDropdownOpen((prev) => !prev);
    }
  }

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Route değişince kapat
  useEffect(() => {
    closeMenu();
  }, [currentRoute]);

  // ESC ile kapat
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Mobil menü açıkken body scroll engelle
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Topbar />
      <div id="header" className={scroll ? "scroll" : ""}>
        <div className="container">
          <div className="header">
            {/* Logo */}
            <div className="header_logo">
              <Link href="/" onClick={closeMenu}>
                <Image
                  className="img_fluid"
                  src="/header-logo.png"
                  width={250}
                  height={93}
                  priority
                  alt="Header Logo"
                />
              </Link>
            </div>

            {/* Menu */}
            <ul className={`header_menu ${isOpen ? "open" : ""}`}>
              <li>
                <Link
                  className={currentRoute === "/" ? "active" : ""}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li className={dropdownOpen ? "dropdown_active" : ""}>
                <div className="menu_dropdown">
                  <Link
                    className={
                      ["/about", "/historys", "/faqs"].includes(currentRoute)
                        ? "active"
                        : ""
                    }
                    href="/about"
                    onClick={toggleDropdown}
                  >
                    About Us
                  </Link>

                  <button
                    type="button"
                    className="dropdown_arrow"
                    onClick={toggleDropdown}
                    aria-label="About Us dropdown"
                    aria-expanded={dropdownOpen}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>

                <ul className={`dropdown ${dropdownOpen ? "open" : ""}`}>
                  <li>
                    <Link
                      className={currentRoute === "/historys" ? "active" : ""}
                      href="/historys"
                      onClick={closeMenu}
                    >
                      Historys
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
                  Case-Study
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

            {/* Hamburger */}
            <button
              type="button"
              className={`header_hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <i className="fa-solid fa-bars icon bars"></i>
              <i className="fa-solid fa-xmark icon times"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
