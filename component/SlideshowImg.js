import { Button, Card } from "antd";
import React, { Component } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import LeftArrow from "../public/img/right.png";
import RightArrow from "../public/img/right1.png";
import { addCartItem } from "../store/slice/cartSlice";
import Image from "next/image";

const { Meta } = Card;
export default function SlideshowImg({ data, title }) {
  const dispatch = useDispatch();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleGetCartItem = (val) => {
    dispatch(addCartItem({ ...val, count: val.count + 1 }));
  };
  return (
    <div className=" w-[80%] mt-8 mb-5 ">
      <h2 className=" text-center tablet:text-2xl tablet:font-semibold text-xl capitilize mb-3 ">
        {title}
      </h2>
      <Slider {...settings}>
        {data.map((val, i) => {
          return (
            <div key={val.id} className="p-4">
              <Card
                key={val.id}
                hoverable
                className="mx-2 shadow-md w-full p-0 "
                cover={
                  <img
                    alt="example"
                    src={val.img}
                    width="100%"
                    className=" h-[200px] object-fill "
                  />
                }
              >
                <Meta title={val.title} />

                <div className=" ">
                  <div className="flex justify-between items-center gap-2  ">
                    <div>
                      <span className="text-gray-400 line-through text-[14px] ">
                        ₹ {val.prev_price}
                      </span>
                      <span className="text-gray-400 text-[12px] ">
                        {val.discount}% off
                      </span>
                    </div>

                    <p className="text-[17px] font-semibold ">
                      ₹ {val.curr_price}
                    </p>
                  </div>
                  <Button
                    type="secondary"
                    onClick={() => handleGetCartItem(val)}
                    className="bg-[#ff4d4f] hover:bg-red-700 text-white mt-2 "
                  >
                    Add To Cart
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
