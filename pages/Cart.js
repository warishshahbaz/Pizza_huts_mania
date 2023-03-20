import { Button, Card, Divider, List, Tooltip } from "antd";
import Image from "antd";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCartItem, decreament, increament } from "../store/slice/cartSlice";
import { RiErrorWarningLine } from "react-icons/ri";
import Payment from "../component/Payment";

const Cart = () => {
  let cartData = useSelector((state) => state.cartItem.data);
  let dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  //console.log("cartData====", cartData);

  /**  total amount ************** */
  let total_tax = (
    (cartData.reduce((acc, val) => acc + val.curr_price * val.count, 0) * 18) /
    100
  ).toFixed(2);
  const Payable_amount = cartData.reduce(
    (acc, val) => acc + val.curr_price * val.count,
    0
  );

  return (
    <>
      <div className=" w-[100vw] flex tablet:flex-row flex-col   min-h-[400px]  gap-3 p-2 ">
        <div className="tablet:w-[60%] w-[100%] max-h-[85vh] overflow-auto ">
          {cartData.length > 0 ? (
            cartData.map((val, i) => {
              return (
                <Card
                  key={val.id}
                  hoverable
                  className="w-[100%] justify-center h-[100px] mb-2  "
                >
                  <div
                    key={val.id}
                    className=" flex w-[100%] justify-between  items-center  "
                  >
                    <div className="flex justify-center items-center ">
                      <img
                        src={val.img}
                        alt="image"
                        width={70}
                        height={70}
                        className="rounded-[50%] tablet:mr-3  object-contain "
                      />
                      <div className=" flex items-center flex-col justify-center ">
                        <p className=" text-start tablet:text-xl text-ellipsis capitalize font-semibold ">
                          {val.title}
                        </p>
                        <div className="flex tablet:w-[200px] w-[150px]  justify-around items-center ">
                          <p className=" line-through text-gray-400 tablet:text-xl text-[12px] ">
                            ₹ 499
                          </p>
                          <span className="  text-gray-400 tablet:text-xl text-[12px] ">
                            50% off
                          </span>
                          <span className="   tablet:text-xl text-[12px] ">
                            ₹ 249
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" flex tablet:w-[100px] w-[80px] gap-2 tablet:flex-row flex-col justify-between items-center ">
                      <button className="tablet:text-2xl">
                        <BsPlusLg onClick={() => dispatch(increament(val))} />
                      </button>
                      <span className="tablet:text-2xl">{val.count}</span>
                      <button className="tablet:text-2xl ">
                        <AiOutlineMinus
                          onClick={() => dispatch(decreament(val))}
                        />
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })
          ) : (
            <Card
              hoverable
              className=" capitalize text-2xl text-red-500 font-bold text-center "
            >
              empty cart
            </Card>
          )}
        </div>

        <Card hoverable className="  tablet:w-[38%] w-[100%] ">
          <h2 className="text-2xl font-semibold ">Bill Summary</h2>
          <List
            className="max-h-[60vh] overflow-auto"
            size="small"
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={cartData}
            renderItem={(item) => {
              return (
                <>
                  <div className="w-[100%] flex justify-between ">
                    <List.Item className="text-md ">{item.title}</List.Item>
                    <List.Item>
                      ₹ {item.curr_price} * {item.count}
                    </List.Item>
                  </div>
                </>
              );
            }}
          />
          {cartData.length > 0 ? (
            <>
              <div className="flex justify-end gap-3 items-end mr-3 flex-col ">
                <div className="flex gap-4 ">
                  <List.Item className="text-xl font-semibold ">
                    Total Amount
                  </List.Item>
                  <List.Item className="text-xl ">
                    ₹{" "}
                    {cartData.reduce(
                      (acc, val) => acc + val.prev_price * val.count,
                      0
                    )}
                  </List.Item>
                </div>
                <div className="flex text-gray-400 gap-4 ">
                  <p>Discount</p>
                  <List.Item className="text-xl line-through ">
                    ₹{" "}
                    {cartData.reduce(
                      (acc, val) => acc + val.prev_price * val.count,
                      0
                    ) -
                      cartData.reduce(
                        (acc, val) => acc + val.curr_price * val.count,
                        0
                      )}
                  </List.Item>
                </div>
                <div className="flex gap-4 ">
                  <p className="flex items-center gap-2 ">Total Tax</p>
                  <Tooltip
                    title={
                      <div>
                        <span>GST</span>
                        <span>18 %</span>
                      </div>
                    }
                  >
                    <RiErrorWarningLine />
                  </Tooltip>
                  <List.Item className="text-xl ">₹ {total_tax}</List.Item>
                </div>
                {/* <Divider  /> */}
                <div className="flex gap-4 ">
                  <p>Payable Amount</p>
                  <List.Item className="text-xl ">
                    ₹ {Number(total_tax) + Payable_amount}
                  </List.Item>
                </div>
              </div>
              <div className=" flex justify-end  mt-3 ">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className=" w-[150px] bg-green-500 text-white "
                >
                  Place Order
                </Button>
              </div>
            </>
          ) : null}
        </Card>
      </div>
      <Payment setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  );
};

export default Cart;
