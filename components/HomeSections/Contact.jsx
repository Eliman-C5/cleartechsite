import { useEffect, useRef, useState } from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
const Contact = () => {
  const formbutton = useRef();
  const checkbox = useRef();

  useEffect(() => {
    const boton = formbutton.current;
    const cajita = checkbox.current;

    cajita.addEventListener('click', () => {
      if (cajita.checked === true) {
        boton.disabled = false;
      } else {
        boton.disabled = true;
      }
    });
  }, []);
  return (
    <div className="w-full bg-[#F7F7F7]">
      <Section>
        <div className="h-[582px] w-full flex items-center">
          <form className="flex-1">
            <h2 className="tittles" style={{ textAlign: 'left' }}>
              Suscribe to <span className="gradient_title">our newsletter</span>{' '}
            </h2>
            <div className="w-[80%] bg-[#DFDFDF] flex items-center rounded-sm mb-[15px] ">
              <img src="/img/bxs_user-circle.svg" className=" mx-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
              />
            </div>
            <div className="w-[80%] bg-[#DFDFDF] flex items-center rounded-sm mb-[30px] ">
              <img src="/img/fluent_mail-20-filled.png" className=" mx-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
              />
            </div>
            <div className="mb-[25px]">
              <input
                type="checkbox"
                className="form-checkbox  text-color03_black focus:ring-0"
                ref={checkbox}
              />
              <label className="text-sm ml-2  text-color03_black">
                I accept the Privacy and Cookies Policity.
              </label>
            </div>
            <button
              type="submit"
              disabled
              ref={formbutton}
              className=" transition-all   duration-500 hover:bg-[#00A8FF] bg-color02_blue text-sm rounded-md  text-white px-7 py-2 disabled:opacity-50"
            >
              Suscribe
            </button>
          </form>
          <div>
            <img src="/img/contact.png" alt="contacto" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
