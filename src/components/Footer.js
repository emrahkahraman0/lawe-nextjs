import Image from "next/image";

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
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <Image
                className="img_fluid"
                src="/footerLogo.png"
                width={200}
                height={75}
                priority
                alt="Footer Logo"
              />
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <Image
                className="img_fluid"
                src="/footerLogo.png"
                width={200}
                height={75}
                priority
                alt="Footer Logo"
              />
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <Image
                className="img_fluid"
                src="/footerLogo.png"
                width={200}
                height={75}
                priority
                alt="Footer Logo"
              />
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
