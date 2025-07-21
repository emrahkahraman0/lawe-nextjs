import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="footer_item">
              <Image
                className="img_fluid"
                src="/footerLogo.png"
                width={200}
                height={75}
                priority
                alt="Footer Logo"
              />
              <p className="copyright">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur pellentesque neque eget diam posuere porta. Quisque ut
                nulla at nunc lacinia. Proin adipiscing porta tellus.
              </p>
              <ul className="social">
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
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Contact Info</h6>
              <div className="desc">
                <div className="desc_item">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>
                    99 S.t Jomblo Park <br /> Pekanbaru 28292 <br /> Indonesia
                  </p>
                </div>
                <div className="desc_item">
                  <i className="fa-solid fa-phone"></i>
                  <Link href="tel:0761654-123987">(0761) 654-123987</Link>
                </div>
                <div className="desc_item">
                  <i className="fa-solid fa-envelope"></i>
                  <Link href="mailto:hellolawe@lawyer.com">
                    hellolawe@lawyer.com
                  </Link>
                </div>
                <div className="desc_item">
                  <i className="fa-solid fa-clock"></i>
                  <p>Mon - Sat 09:00 - 17:00</p>
                </div>
              </div>
              {/*desc*/}
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Contact Info</h6>
              <ul className="areas">
                <li>
                  <Link href="#">Single Practice</Link>
                </li>
                <li>
                  <Link href="#">Single Practice</Link>
                </li>
                <li>
                  <Link href="#">Single Practice</Link>
                </li>
              </ul>
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Usefull Link</h6>
              <ul className="links">
                <li>
                  <Link href="#">Attorney</Link>
                </li>
                <li>
                  <Link href="#">Attorney</Link>
                </li>
                <li>
                  <Link href="#">Attorney</Link>
                </li>
                <li>
                  <Link href="#">Attorney</Link>
                </li>
                <li>
                  <Link href="#">Attorney</Link>
                </li>
                <li>
                  <Link href="#">Attorney</Link>
                </li>
              </ul>
            </div>
            {/*footer_item*/}
          </div>
          {/*footer*/}
        </div>
        {/*container*/}
      </div>
      {/*footer#*/}
    </>
  );
}

export default Footer;
