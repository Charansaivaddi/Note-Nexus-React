import React from 'react';
import './Tutorial.css'

const Tutor = () => {
  return (
    <div>
        <div id='cell1'>
            <p>Wanna learn how to play piano</p>
            <iframe title="Piano Tutorial" width="560" height="315" src="https://www.youtube.com/embed/AKSMzmjCTN8" allowFullScreen ></iframe>
        </div>
        <div id='cell2'>
            <p>Wanna learn how to play tabla</p>
            <iframe title="Tabla Tutorial" width="560" height="315" src="https://www.youtube.com/embed/asx3wwdO178" allowFullScreen ></iframe>
        </div>
    </div>
  );
}

export default Tutor;
