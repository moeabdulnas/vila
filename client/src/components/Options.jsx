import { useEffect, useState } from "react";
import bell from "../assets/images/bell.png";
import cloud from "../assets/images/cloud.png";
import sand from "../assets/images/sand.png";
import "./Options.css";
// import MinutesDialog from "./dialogs/MinutesDialog.jsx";

const Options = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (showDialog) {
            const dialog = document.querySelector('.Sand-button');
            dialog.showModal();
        }
    }, [showDialog]);

    return (
        <main className="Container">
            <div className="Options">
                {/* TODO: Set hover effect*/}
                <button className="Sand-button" 
                // onClick={
                //     () => {
                //         setShowDialog(true);
                //     }     
                // }
                    
                >
                    <img src={sand} className="Sand-logo option" alt="bell" />
                </button>
                <button className="Bell-button">
                    <img src={bell} className="Bell-logo option" alt="bell" />
                </button>
                <button className="Cloud-button">
                    <img src={cloud} className="Cloud-logo option" alt="bell" />
                </button>
            </div>
            {/* <dialog className='TimeOption'
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
          </dialog> */}
            {/* <MinutesDialog show={showDialog}/> */}
        </main>
    )
}

export default Options;