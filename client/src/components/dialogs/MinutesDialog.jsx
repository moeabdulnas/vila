import './MinutesDialog.css'
import { useEffect, useState, useRef } from "react";

const MinutesDialog = (props) => {
    // const [minutes, setMinutes] = useState(10);


    return (
        props.show ? (
            <div>
                <dialog className='TimeOption' open>
                    <p className='MinutesParagraph'>minutes</p>
                    <div className='MinuteStepper'>
                        <button className='Minus Step' onClick={
                            () => {
                                if (props.mins <= 5 && props.mins > 1) 
                                    props.setMinutes(props.mins - 1);
                                else{
                                    props.setMinutes(props.mins - 5);
                                }
                            }
                        }>-</button>
                        <input
                            type='number' className='Minutes'
                            value={props.mins} min='1' max='120' step='5' readOnly
                        />
                        <button className='Plus Step' onClick={
                            () => {
                                if (props.mins < 120){
                                    if (props.mins % 5 !== 0 && props.mins < 5) {
                                        props.setMinutes(props.mins + 1);
                                    } 
                                    else {
                                        props.setMinutes(props.mins + 5);
                                    }
                                }
                            
                            }
                        }>+</button>
                    </div>
                    <form method="dialog">
                        <button className='Ok' onClick={() => {
                                props.show(false);
                                props.setMinutes(props.mins);
                            }
                            }>OK</button>
                    </form>
                </dialog>
            </div>
        ) : null
    );
}

export default MinutesDialog;