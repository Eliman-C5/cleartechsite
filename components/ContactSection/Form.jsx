import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneralProvider } from '../../context/GeneralProvider';
import ThanksModal from 'components/Modals/ThanksModal';

export const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: '',
    area: '',
    priority: '',
    message: '',
  });
  const { name, email, problem, area, priority, message } = formData;
  
  const [thanksContactModal, setThanksContactModal] = useState(false);
  const { setThanks } = useGeneralProvider();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/22603129/99d0205f-dde7-4c98-b043-63e3a2895a8b';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'firstname',
          value: name,
        },
        {
          name: 'email',
          value: email,
        },
        {
          name: 'problem',
          value: problem,
        },
        {
          name: 'area',
          value: area,
        },
        {
          name: 'priority',
          value: priority,
        },
        {
          name: 'message',
          value: message,
        },
      ],
      context: {
        pageUri: 'http://localhost:3000/',
        pageName: 'cleartech',
      },
    };
    //pasamos el dato a JSON para enviar
    let final_data = JSON.stringify(data);
    //metodo de postear  a la url de hubspot
    xhr.open('POST', url);
    //mandar peticion de typo application/json
    xhr.setRequestHeader('Content-Type', 'application/json');
    //funcion que sirce para verificar que se haya mandado el form
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        //se controla el modal de agradecimiento
        setThanks(true);
        setThanksContactModal(true);
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log(xhr.responseText);
      }
    };
    //mandar a emailjs
    //el emailjs recibe los datos de la ref del form con los parametros de el servide id y el form id
    //los datos del correo vienen del atributo de name

    //mandar la request final a la api de hubspot
    xhr.send(final_data);
    //dejar vacio el estado que mandael form
    //setMail('');
    //setName('');
  };

  return (
    <AnimatePresence>
              <div className="bg-white  rounded-xl mt-[45px]">
                <div className="w-[80%] max-w-[570px] h-[700px]  mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                      <img src="/img/bxs_user-circle.svg" className=" mx-3" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                        value={name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                      <img
                        src="/img/fluent_mail-20-filled.png"
                        className=" mx-3"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="py-[10px] bg-transparent w-full form-input text-color03_black border-none focus:ring-0  ring-0"
                        value={email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                      <img src="/img/chat.svg" className=" mx-3" />
                      <input
                        type="text"
                        placeholder="Your potencial problem"
                        className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                        value={problem}
                        onChange={(e) =>
                          setFormData({ ...formData, problem: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                      <select
                        name=""
                        id=""
                        className=" w-full py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                        value={area}
                        onChange={(e) =>
                          setFormData({ ...formData, area: e.target.value })
                        }
                        required
                      >
                        <option value="" defaultValue disabled hidden>
                          What area are you from?
                        </option>
                        <option value="General Management">
                          General Management
                        </option>
                        <option value="IT Systems">IT Systems</option>
                        <option value="Operations">Operations</option>
                        <option value="Marketing and sales">
                          Marketing and sales
                        </option>
                        <option value="Finance">Finance</option>
                      </select>
                    </div>
                    <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                      <select
                        name=""
                        id=""
                        className=" w-full py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                        required
                        value={priority}
                        onChange={(e) =>
                          setFormData({ ...formData, priority: e.target.value })
                        }
                      >
                        <option value="" defaultValue disabled hidden>
                          What is your business priority?
                        </option>
                        <option value="Intelligent Decision Making + Action Planning">
                          Intelligent Decision Making + Action Planning
                        </option>
                        <option value="Process Automation + Machine Learning">
                          Process Automation + Machine Learning
                        </option>
                        <option value="Organizational + Systemic Knowledge Base Systems">
                          Organizational + Systemic Knowledge Base Systems
                        </option>
                        <option value="Localized Knowledge + Process Management">
                          Localized Knowledge + Process Management
                        </option>
                        <option value="Record Keeping + Documentation">
                          Record Keeping + Documentation
                        </option>
                      </select>
                    </div>
                    <div className="w-full bg-[#DFDFDF] flex items-center rounded-md mb-[20px] ">
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"
                        className=" w-full py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
                        value={message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
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
              {
                thanksContactModal && <ThanksModal
                  img={'/img/contact_modal.png'}
                  title="Your message was sent"
                  desc="Our specialists will contact you soon"
                  buttonText="Look at our services"
                  buttonLink="/Services"
                />
              }
    </AnimatePresence>
  )
}
