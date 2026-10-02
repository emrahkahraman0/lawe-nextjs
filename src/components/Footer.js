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
                src="/footer-logo.png"
                width={200}
                height={75}
                priority
                alt="Footer Logo"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur pellentesque neque eget diam posuere porta. Quisque ut
                nulla at nunc lacinia. Proin adipiscing porta tellus.
              </p>
              <ul className="socials">
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
              </ul>
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h4>Contact Info</h4>
              <div className="desc">
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h4>99 S.t Jomblo Park Pekanbaru 28292 Indonesia</h4>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <Link href="tel:+62 812-3456-7890">+62 812-3456-7890</Link>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="text">
                    <Link href="mailto:hellolawe@lawyer.com">
                      hellolawe@lawyer.com
                    </Link>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className="text">
                    <h4>99 S.t Jomblo Park Pekanbaru 28292 Indonesia</h4>
                  </div>
                </div>
                {/*desc_item*/}
              </div>
              {/*desc*/}
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h4>Practice Areas</h4>
              <ul className="areas">
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
              </ul>
              {/*areas*/}
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h4>Usefull Links</h4>
              <ul className="links">
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
                <li>
                  <Link href="/">Criminal Law</Link>
                </li>
              </ul>
              {/*areas*/}
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
