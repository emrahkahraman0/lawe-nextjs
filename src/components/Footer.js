import Image from "next/image";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer_left">
              <Image
                src="/footer-logo.png"
                width={200}
                height={75}
                priority
                alt="Footer Logo"
              />
            </div>
            {/*footer_left*/}
            <div className="footer_right">
              © 2021 Hero-Tech. All rights reserved.
            </div>
            {/*footer_right*/}
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
