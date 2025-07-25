"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function HomeSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div id="home_slider">
        <Slider className="home_slider" {...settings}>
          <div className="home_slider_item">
            <Image
                className="img_fluid"
                src="/1920x650.png"
                width={1920}
                height={650}
                priority
                alt="Home Slider 1"
            />
            <div className="slider_caption">
              <h5>Welcome to Lawe</h5>
              <h6>Most Successful Law Firm</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="home_slider_item">
            <Image
                className="img_fluid"
                src="/1920x650.png"
                width={1920}
                height={650}
                priority
                alt="Home Slider 1"
            />
            <div className="slider_caption">
              <h5>Welcome to Lawe</h5>
              <h6>Most Successful Law Firm</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="home_slider_item">
            <Image
                className="img_fluid"
                src="/1920x650.png"
                width={1920}
                height={650}
                priority
                alt="Home Slider 1"
            />
            <div className="slider_caption">
              <h5>Welcome to Lawe</h5>
              <h6>Most Successful Law Firm</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button>Learn More</button>
            </div>
          </div>
        </Slider>
      </div>
      {/*home_slider*/}
    </>
  );
}

export default HomeSlider;
