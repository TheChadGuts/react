import React, { Fragment, useState } from "react";

const Formulario = () => {
  const[cita, actualizarCita] = useState({
    mascota:'',
    propietario: '',
    fecha:'',
    hora:'',
    sintomas:''
  });


  const actualizarState = e => {
    actualizarCita({
    ...cita,
    [e.target.name]: e.target.value
    })
    
  }

  const{mascota, propietario, fecha, hora, sintomas} = cita;

  const submitCita = e => {
     e.preventDefault();

     



  }
  


  return (
    <Fragment>
      <h2>Crear cita</h2>

      <form
         onSubmit={submitCita}
      
      >
        <label>Nombre Mascota</label>
        <input
           type="text"
           name="mascota"
           className="u-full-width"
           placeholder="Nombre mascota"
           onChange={actualizarState}
           value={mascota}
         />
         <label>Nombre Dueño</label>
        <input
           type="text"
           name="dueño"
           className="u-full-width"
           placeholder="Nombre Dueño"
           onChange={actualizarState}
           value={propietario}
         />
         <label>Fecha</label>
         <input
           type="date"
           name="fecha"
           className="u-full-width"
           onChange={actualizarState}
           value={fecha}
         />
         <label>Hora</label>
         <input
           type="time"
           name="hora"
           className="u-full-width"
           onChange={actualizarState}
           value={hora}
         />
         <label>Sintomas</label>
         <textarea            
           className="u-full-width"
           name="sintomas">
           onChange={actualizarState}
           value={mascota}sintomas

         </textarea>

         <button
           type="submit"
           className="u-full-width button-primary"
         >Agregar Cita</button> 
         
        </form>    
    </Fragment>
  );
};
export default Formulario;
