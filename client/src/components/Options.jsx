import { useEffect, useState } from "react";
import bell from "../assets/images/bell.png";
import cloud from "../assets/images/cloud.png";
import sand from "../assets/images/sand.png";
import "./Options.css";
import MinutesDialog from "./dialogs/MinutesDialog.jsx";

const Options = (props) => {
    const [showDialog, setShowDialog] = useState(false);



    return (
        <main className="Container">
            <div className="Options">
                {/* TODO: Set hover effect*/}
                <button className="Sand-button" 
                onClick={
                    () => {
                        setShowDialog(true);
                    }     
                }
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
            {showDialog ? <MinutesDialog show={setShowDialog} setMinutes={props.setMins} mins={props.mins}/> : null}
        </main>
    )
}

export default Options;