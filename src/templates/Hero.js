"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="hero">
        <Slider className="hero" {...settings}>
          {/*hero_gallery_item*/}
          <div className="hero_item">
            <Image
              className="img_fluid"
              src="/bg.png"
              width={1440}
              height={782}
              priority
              alt="Slider Image"
            />
            <div className="caption container">
              <h6>We are what we do not what we say we'll do.</h6>
              <p>
                Risus viverra at in lectus arcu id. Potenti diam, justo lectus
                mattis. A, sit duis quis turpis pellentesque. Purus amet, risus
                nisl morbi mi id.{" "}
              </p>
              <div className="read_more">
                <Link href="/">Get a Quote</Link>
                <Link href="/">Get a Quote</Link>
              </div>
            </div>
            {/*caption*/}
          </div>
          {/*hero_gallery_item*/}
          <div className="hero_item">
            <Image
              className="img_fluid"
              src="/bg.png"
              width={1440}
              height={782}
              priority
              alt="Slider Image"
            />
            <div className="caption container">
              <h6>We are what we do not what we say we'll do.</h6>
              <p>
                Risus viverra at in lectus arcu id. Potenti diam, justo lectus
                mattis. A, sit duis quis turpis pellentesque. Purus amet, risus
                nisl morbi mi id.{" "}
              </p>
              <div className="read_more">
                <Link href="/">Get a Quote</Link>
                <Link href="/">Get a Quote</Link>
              </div>
            </div>
          </div>
          {/*hero_gallery_item*/}
          <div className="hero_item">
            <Image
              className="img_fluid"
              src="/bg.png"
              width={1440}
              height={782}
              priority
              alt="Slider Image"
            />
            <div className="caption container">
              <h6>We are what we do not what we say we'll do.</h6>
              <p>
                Risus viverra at in lectus arcu id. Potenti diam, justo lectus
                mattis. A, sit duis quis turpis pellentesque. Purus amet, risus
                nisl morbi mi id.{" "}
              </p>
              <div className="read_more">
                <Link href="/">Get a Quote</Link>
                <Link href="/">Get a Quote</Link>
              </div>
            </div>
          </div>
          {/*hero_gallery_item*/}
        </Slider>
      </div>
      {/*hero#*/}
    </>
  );
}

export default Hero;
