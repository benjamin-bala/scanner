import React from "react";
import Carousel, { CarouselItem } from "../Carousel";
import HeadingText from "../HeadingText";
import chart from "../../assets/images/Chart.svg";
import location from "../../assets/images/Location.svg";
import receipt from "../../assets/images/Receipts.svg";

export default function Slide() {
  const slideitems = [
    {
      name: "receipt",
      text: `Say goodbye 👋 \n to paper receipts`,
      image: receipt,
    },
    {
      name: "chart",
      text: `Monitor your \n daily spending`,
      image: chart,
    },
    {
      name: "location",
      text: `Easily access your \n receipts anywhere`,
      image: location,
    },
  ];
  return (
    <Carousel>
      {slideitems.map((item) => {
        return (
          <CarouselItem key={item.name}>
            <div className='flex flex-col items-center my-8'>
              <img src={item.image} alt='' className='mb-8' />
              <HeadingText text={item.text} color='text-white' />
            </div>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}
