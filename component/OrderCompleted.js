import React from "react";
import { Button, Modal, Result } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/slice/cartSlice";

const OrderCompleted = ({ setIsPaymentDone, isPaymentDone }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handlePaymentCompleted = () => {
    setIsPaymentDone(false);
    dispatch(clearCart());
    router.push("/Products");
  };
  return (
    <>
      <Modal
        footer={null}
        open={isPaymentDone}
        onCancel={() => {
          dispatch(clearCart());
          setIsPaymentDone(false);
        }}
      >
        <Result
          status="success"
          title="Successfully Order Placed!"
          subTitle="Order number: 2017182818828182881 will be Delivered in 10-25 minutes."
          extra={[
            <Button
              key="buy"
              size="large"
              className=" text-blue-500  "
              onClick={handlePaymentCompleted}
            >
              Buy Again
            </Button>,
          ]}
        />
      </Modal>
    </>
  );
};
export default OrderCompleted;
