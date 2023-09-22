import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import BeerImage from "../../public/BeerImage1.jpg";
import BeerImage2 from "../../public/BeerImage2.jpg";
import BeerImage3 from "../../public/BeerImage3.jpg";

class Banner extends Component {
  render(): React.ReactNode {
    return (
      <div className="relative">
        <div className="absolute bottom-0 z-20 h-32 w-full bg-gradient-to-t from-gray-100 to-transparent" />
        <Carousel
          autoPlay
          dynamicHeight
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <Image alt="" src={BeerImage} />
          </div>
          <div>
            <Image alt="" src={BeerImage2} />
          </div>
          <div>
            <Image alt="" src={BeerImage3} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Banner;
