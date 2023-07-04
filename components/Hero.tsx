"use client";
import Image from "next/image";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Hero = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={70}
      totalSlides={2}
      visibleSlides={1}
      infinite
      className="shadow-md"
    >
      <Slider>
        <Slide index={0}>
          <Image
            src={"/hero1.jpg"}
            alt="hero"
            width={100}
            height={70}
            className="w-full h-full"
          />
        </Slide>
        <Slide index={1}>
          <Image
            src={"/hero3.jpg"}
            alt="hero"
            width={100}
            height={70}
            className="w-full h-full"
          />
        </Slide>
      </Slider>
      <div className="flexBetween">
        <ButtonBack>
          <MdKeyboardArrowRight size={25} className="text-red-500" />
        </ButtonBack>
        <Image src={"/logo1.png"} alt="logo" width={40} height={40} />
        <ButtonNext>
          <MdKeyboardArrowLeft size={25} className="text-red-500" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Hero;
