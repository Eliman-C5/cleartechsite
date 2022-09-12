import { useState } from 'react';

const useHubspotForm = (initialValues = {}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21108231/43ae4804-c13b-4b0a-87c1-ef9b42ddfcfb';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'entidad',
          value: name,
        },
        {
          name: 'address',
          value: direccion,
        },
        {
          name: 'email',
          value: email,
        },
        {
          name: 'lugar',
          value: lugar,
        },
        {
          name: 'duracion',
          value: duracion,
        },
      ],
      context: {
        pageUri: 'http://localhost:3000/',
        pageName: 'Thinkweek',
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
        setFormConfirm(true);
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
    setEmail('');
    setName('');
    setDireccion('');
    setLugar('');
    setDuracion('');
  };

  //Este state tomara los valores inciales

  const [values, setValues] = useState(initialValues);
  //forma dianmica de poner un obejto, toma la propiedad del name que le mandes
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  //retorno del hook
  return [values, handleInputChange, handleSubmit];
};

export default useHubspotForm;
