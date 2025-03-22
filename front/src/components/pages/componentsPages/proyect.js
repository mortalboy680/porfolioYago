import './../stylesComponentsPages/proyect.css';
import React, { useState } from 'react';


const Proyect = () => {
    return (
        <div className='proyectDivBody'>
            <form className='proyectFrom'>
                <h2>Entremos en contacto</h2>
                <input type="text" name="name" placeholder="Nombre" required className="nameInput input" />
                <input type="email" name="email" placeholder="Correo" required className='emailInput input' />
                <textarea name="message" placeholder="Mensaje" required className='textarea' />
                <button type="submit" className='buttom'>Enviar</button>
            </form>
        </div>
    );
};

export default Proyect;