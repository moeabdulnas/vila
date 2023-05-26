import './MinutesDialog.css'
import { useEffect, useState, useRef } from "react";

const MinutesDialog = (props) => {
    const [minutes, setMinutes] = useState(10);
    return (
        props.show ? (
            <div>
                <dialog className='TimeOption' open>
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
                        <button className='Ok' onClick={() => {
                                props.show(false);
                                props.setMinutes(minutes);
                            }
                            }>OK</button>
                    </form>
                </dialog>
            </div>
        ) : null
    );
}

export default MinutesDialog;