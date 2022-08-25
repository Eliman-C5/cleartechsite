import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneralProvider } from '../../context/GeneralProvider';
const ContactUs = () => {
  const { contact, setContact } = useGeneralProvider();
  return (
    <AnimatePresence>
      {contact && (
        <motion.div
          className="w-full h-screen fixed flex justify-center items-center  inset-0 z-40 bg-black/30  overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[80%] max-w-[570px] h-[700px]  bg-white  rounded-xl relative">
            <button
              onClick={() => setContact(!contact)}
              className="absolute  right-6 top-5"
            >
              <img src="/img/close_modal.svg" alt="close modal" />
            </button>
            <div className="w-4/5 mx-auto">
              <h2
                className="tittles gradient_title"
                style={{
                  marginBottom: '30px',
                  textAlign: 'left',
                  marginTop: '45px',
                }}
              >
                Contact us!
              </h2>
              <form>
                <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                  <img src="/img/bxs_user-circle.svg" className=" mx-3" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                  />
                </div>
                <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                  <img src="/img/fluent_mail-20-filled.png" className=" mx-3" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                  />
                </div>
                <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                  <img src="/img/chat.svg" className=" mx-3" />
                  <input
                    type="text"
                    placeholder="Your potencia problem"
                    className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                  />
                </div>
                <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                  <select
                    name=""
                    id=""
                    className=" w-full py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                  >
                    <option value="" selected disabled hidden>
                      What area are you from?
                    </option>
                    <option value="volvo">General Management</option>
                    <option value="saab">IT Systems</option>
                    <option value="mercedes">Operations</option>
                    <option value="audi">Marketing and sales</option>
                    <option value="audi">Finance</option>
                  </select>
                </div>
                <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                  <select
                    name=""
                    id=""
                    className=" w-full py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                  >
                    <option value="" selected disabled hidden>
                      Do you have a data management system?
                    </option>
                    <option value="volvo">General Management</option>
                    <option value="saab">IT Systems</option>
                    <option value="mercedes">Operations</option>
                    <option value="audi">Marketing and sales</option>
                    <option value="audi">Finance</option>
                  </select>
                </div>
                <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    className=" w-full py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" hover:bg-[#00A8FF] transition-all bg-color02_blue mt-[30px] text-white text-sm px-[30px] py-[10px] rounded-md "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactUs;
