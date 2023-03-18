import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlideshowImg from "../component/SlideshowImg";
import { burger_pizza, non_veg_pizza, veg_pizza } from "../Data";
import { addCartItem } from "../store/slice/cartSlice";
const { Meta } = Card;

const Products = () => {
  let res = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(res);
  const handleGetCartItem = (val) => {
    console.log("val", val);
    dispatch(addCartItem({ ...val, count: val.count + 1 }));
    //console.log(res);
  };
  return (
    <>
      <div className=" w-[100vw] flex justify-center items-center flex-col gap-4 ">
        <SlideshowImg data={veg_pizza} title="Vegetarian Pizza" />
        <SlideshowImg data={non_veg_pizza} title="Non Vegetarian Pizza" />
        <SlideshowImg data={burger_pizza} title="Burger Pizza" />
        <SlideshowImg data={burger_pizza} title="Paratha Pizza" />
      </div>
    </>
  );
};
export default Products;
// .demo-loadmore-list {
//   min-height: 350px;
// }
