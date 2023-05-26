import './MinutesDialog.css'
import { useEffect, useState, useRef } from "react";
const MinutesDialog = (props) => {
    const [minutes, setMinutes] = useState(10);
   


    return (
        <dialog className='TimeOption'
          // ref={dialogRef}
          >
            <p className='MinutesParagraph'>minutes</p>
            <div className='MinuteStepper'>
              <button className='Minus Step'>-</button>
              <input 
                type='number' className='Minutes' 
                value={minutes} min='1' max='120' step='5' readOnly
                />
              <button className='Plus Step'>+</button>
            </div>
            <form method="dialog">
              <button className='Ok'>OK</button>
            </form>
          </dialog>
    )
}

export default MinutesDialog;