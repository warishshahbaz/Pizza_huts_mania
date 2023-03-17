import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { veg_pizza } from "../Data";
import { addCartItem } from "../store/slice/cartSlice";
const { Meta } = Card;

const PopularItems = () => {
  let dispatch = useDispatch();

  const handleGetCartItem = (val) => {
    dispatch(addCartItem({ ...val, count: val.count + 1 }));
  };
  return (
    <>
      <div className=" w-[100vw] flex justify-center items-center flex-col ">
        <h2 className="text-3xl font-semibold text-center ">
          Our Most Popular Deals
        </h2>
        <div className="grid xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3  w-[80vw]  place-items-center   mt-3 mb-3 ">
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
    </>
  );
};

export default PopularItems;
