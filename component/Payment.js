import { Button, Modal } from "antd";
import { useState } from "react";
import OrderCompleted from "./OrderCompleted";

const Payment = ({ isModalOpen, setIsModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
      setIsPaymentDone(true);
    }, 3000);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Payment"
        centered
        width={400}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ padding: 0, overflow: "hidden", borderRadius: "8px" }}
      >
        <div className="w-full h-[400px]">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-full h-[80px] flex items-center gap-4 p-4 rounded-t-md shadow-md">
            <img
              src="/img/pizza1.jpg"
              alt="Pizza logo"
              className="w-[60px] h-[60px] rounded-full shadow-md"
            />
            <div>
              <h3 className="text-white font-semibold text-2xl">Pizza Mania</h3>
              <p className="text-gray-200 text-sm">Bill No #2242</p>
              <p className="text-white font-semibold text-lg">₹ 459</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 border border-gray-200 mt-4 mx-4 rounded-md p-3 flex items-center gap-4 text-gray-600">
            <p className="font-medium">+91964576342</p>
            <span className="text-gray-400">|</span>
            <p className="font-medium">mdshahbaz323@gmail.com</p>
          </div>

          {/* Payment Method Options */}
          <div className="mt-4 mx-4 p-4 bg-gray-50 rounded-md border border-gray-200 shadow-sm">
            <h4 className="text-gray-700 font-semibold mb-3">Payment Method</h4>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Credit Card
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                UPI
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition">
                Cash
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center mt-6">
            <Button
              loading={loading}
              size="large"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-200"
              onClick={handleOk}
            >
              Confirm Payment
            </Button>
          </div>
        </div>
      </Modal>
      {Boolean(isPaymentDone) && (
        <OrderCompleted
          setIsPaymentDone={setIsPaymentDone}
          isPaymentDone={isPaymentDone}
        />
      )}
    </>
  );
};
export default Payment;
