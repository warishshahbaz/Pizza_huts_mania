import { Button, Modal } from "antd";
import { useState } from "react";

const Payment = ({ isModalOpen, setIsModalOpen }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
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
        width={350}
        open={isModalOpen}
        bodyStyle={{ width: "100%", height: "100%" }}
        style={{ width: "200px" }}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="w-[100%]  h-[400px] ">
          <div className="bg-[#3987da] w-[100%] h-[77px]  flex gap-5 justify-start items-center ">
            <div className="ml-4">
              <img
                src="/img/pizza1.jpg"
                alt="logo"
                className=" w-[50px] h-[50px] rounded-full ml-3 "
              />
            </div>
            <div>
              <h3 className="text-white text-xl ">Pizza mania</h3>
              <p className="text-gray-400 text-[14px] ">bill No #2242</p>
              <p className="text-white text-xl ">₹ 459</p>
            </div>
          </div>
          <div className=" h-[50px] flex border-gray-300 border-spacing-3 border-2 mt-2 gap-4 justify-center items-center ">
            <p> +91964576342</p>
            <p>mdshahbaz323@gmail.com</p>
                  </div>
                  <div>
                      <div>
                          
                      </div>
                  </div>
        </div>
      </Modal>
    </>
  );
};
export default Payment;
