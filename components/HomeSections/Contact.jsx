import { useEffect, useRef, useState } from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import { useGeneralProvider } from '../../context/GeneralProvider';
import ThanksModal from '../Modals/ThanksModal';
const Contact = () => {
  const formbutton = useRef();
  const checkbox = useRef();

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [privacy, setPrivacy] = useState('Yes');
  const [suscribeModal, setSuscribeModal] = useState(false);
  const { thanks, setThanks } = useGeneralProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/22603129/cb7d4605-476d-4e65-8043-d72701ce71c4';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'firstname',
          value: name,
        },
        {
          name: 'privacy_policy',
          value: privacy,
        },
        {
          name: 'email',
          value: mail,
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
        setThanks(true);
        setSuscribeModal(true);
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
    setMail('');
    setName('');
  };
  console.log(privacy);
  useEffect(() => {
    const boton = formbutton.current;
    const cajita = checkbox.current;
    console.log(cajita.value);
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
        <div className="h-auto md:h-[582px] w-full flex md:flex-row flex-col items-center">
          <form className="flex-1 py-10 md:py-0" onSubmit={handleSubmit}>
            <h2 className="tittles" style={{ textAlign: 'left' }}>
              Suscribe to <span className="gradient_title">our newsletter</span>{' '}
            </h2>
            <div className="md:w-[80%] bg-[#DFDFDF] flex items-center rounded-sm mb-[15px] ">
              <img src="/img/bxs_user-circle.svg" className=" mx-3" />
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
              />
            </div>
            <div className="md:w-[80%] bg-[#DFDFDF] flex items-center rounded-sm mb-[30px] ">
              <img src="/img/fluent_mail-20-filled.png" className=" mx-3" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="py-[10px] bg-transparent form-input text-color03_black border-none focus:ring-0  ring-0"
              />
            </div>
            <div className="mb-[25px]">
              <input
                type="checkbox"
                className="form-checkbox  text-color03_black focus:ring-0"
                name="privacy_policy"
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
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
            <img
              src="/img/contact.png"
              alt="contacto"
              className="py-5 md:py-0"
            />
          </div>
        </div>
      </Section>
      {suscribeModal && (
        <ThanksModal
          img={'/img/suscribe_modal.png'}
          title="Thank you for suscribing"
          desc="You will receive our news in your mail"
          buttonText="Go to Blog"
          buttonLink="https://clear-tech.com/blog/"
        />
      )}
    </div>
  );
};

export default Contact;
