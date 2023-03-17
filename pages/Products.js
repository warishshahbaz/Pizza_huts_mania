import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { burger_pizza, non_veg_pizza, veg_pizza } from "../Data";
import { addCartItem } from "../store/slice/cartSlice";
const { Meta } = Card;

const Products = () => {
  let res = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(res);
  const handleGetCartItem = (val) => {
    console.log("val", val);
    dispatch(addCartItem({...val,count:val.count+1}));
    //console.log(res);
  };
  return (
    <div className="w-[100vw] flex justify-center flex-col items-center ">
      <div>
        <h2 className="text-lg tablet:text-2xl tablet:font-bold m-1 text-center  ">
          Vegetarian Pizza's
        </h2>
        <div className="flex gap-3 ">
          {veg_pizza.map((val) => {
            return (
              
              <Card
                hoverable
                style={{
                  width: 290,
                }}
                cover={
                  <img
                    alt="example"
                    src={val.img}
                    className=" h-[200px] object-fill "
                  />
                }
              >
                <Meta title={val.title} />
                <div className="flex justify-between items-center  ">
                  <Button
                    onClick={() => handleGetCartItem(val)}
                    className="bg-[#ff4d4f] text-white mt-2 "
                  >
                    Add To Cart
                  </Button>
                  <div className="flex justify-center items-center gap-2  ">
                    <span className="text-gray-400 line-through text-[14 px] ">
                      ₹ {val.prev_price}
                    </span>{" "}
                    <span className="text-gray-400 text-[12px] ">
                      {val.discount}% off
                    </span>
                    <p>₹ {val.curr_price}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-lg tablet:text-2xl tablet:font-bold m-1 text-center  ">
          Non Vegetarian Pizza's
        </h2>
        <div className="flex gap-3 ">
          {non_veg_pizza.map((val) => {
            return (
              <Card
                hoverable
                style={{
                  width: 290,
                }}
                cover={
                  <img
                    alt="example"
                    src={val.img}
                    className=" h-[200px] object-fill "
                  />
                }
              >
                <Meta title={val.title} />
                <div className="flex justify-between items-center  ">
                  <Button
                    onClick={() => handleGetCartItem(val)}
                    className="bg-[#ff4d4f] text-white mt-2 "
                  >
                    Add To Cart
                  </Button>
                  <div className="flex justify-center items-center gap-2  ">
                    <span className="text-gray-400 line-through text-[14 px] ">
                      ₹ {val.prev_price}
                    </span>{" "}
                    <span className="text-gray-400 text-[12px] ">
                      {val.discount}% off
                    </span>
                    <p>₹ {val.curr_price}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-lg tablet:text-2xl tablet:font-bold m-1 text-center  ">
          Burger Pizza's
        </h2>
        <div className="flex gap-3 ">
          {burger_pizza.map((val) => {
            return (
              <Card
                hoverable
                style={{
                  width: 290,
                }}
                cover={
                  <img
                    alt="example"
                    src={val.img}
                    className=" h-[200px] object-fill "
                  />
                }
              >
                <Meta title={val.title} />
                <div className="flex justify-between items-center  ">
                  <Button
                    onClick={() => handleGetCartItem(val)}
                    className="bg-[#ff4d4f] text-white mt-2 "
                  >
                    Add To Cart
                  </Button>
                  <div className="flex justify-center items-center gap-2  ">
                    <span className="text-gray-400 line-through text-[14 px] ">
                      ₹ {val.prev_price}
                    </span>{" "}
                    <span className="text-gray-400 text-[12px] ">
                      {val.discount}% off
                    </span>
                    <p>₹ {val.curr_price}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-lg tablet:text-2xl tablet:font-bold m-1 text-center  ">
          Paratha Pizza's
        </h2>
        <div className="flex gap-3 ">
          {burger_pizza.map((val) => {
            return (
              <Card
                hoverable
                style={{
                  width: 290,
                }}
                cover={
                  <img
                    alt="example"
                    src={val.img}
                    className=" h-[200px] object-fill "
                  />
                }
              >
                <Meta title={val.title} />
                <div className="flex justify-between items-center  ">
                  <Button
                    onClick={() => handleGetCartItem(val)}
                    className="bg-[#ff4d4f] text-white mt-2 "
                  >
                    Add To Cart
                  </Button>
                  <div className="flex justify-center items-center gap-2  ">
                    <span className="text-gray-400 line-through text-[14 px] ">
                      ₹ {val.prev_price}
                    </span>{" "}
                    <span className="text-gray-400 text-[12px] ">
                      {val.discount}% off
                    </span>
                    <p>₹ {val.curr_price}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Products;
// .demo-loadmore-list {
//   min-height: 350px;
// }
