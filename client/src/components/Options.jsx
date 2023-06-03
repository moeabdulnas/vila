import { useEffect, useState } from "react";
import bell from "../assets/images/bell.png";
import cloud from "../assets/images/cloud.png";
import sand from "../assets/images/sand.png";
import "./Options.css";
import MinutesDialog from "./dialogs/MinutesDialog.jsx";
import BellDialog from "./dialogs/BellDialog.jsx";
import SoundDialog from "./dialogs/SoundDialog.jsx";
import { AiFillSound  } from "react-icons/ai";
import { IconContext } from "react-icons";
const Options = (props) => {
    const [showMinuteDialog, setShowMinuteDialog] = useState(false);
    const [showBellDialog, setShowBellDialog] = useState(false);
    const [showSoundDialog, setShowSoundDialog] = useState(false);
    return (
        <main className="Container">
            <div className="Options">
                {/* TODO: Set hover effect*/}
                <button className="Sand-button" onClick={() => {
                        if (showMinuteDialog) setShowMinuteDialog(false);
                        else {
                            setShowMinuteDialog(true);
                            setShowBellDialog(false);
                            setShowSoundDialog(false);
                        }

                }}>
                <img src={sand} className="Sand-logo option" alt="bell" />
                </button>
                <button className="Bell-button" onClick={ () => {
                    if (showBellDialog) setShowBellDialog(false);
                    else {
                        setShowBellDialog(true);
                        setShowMinuteDialog(false);
                        setShowSoundDialog(false);
                    }
                }}>
                <img src={bell} className="Bell-logo option" alt="bell" />
                </button>
                <button className="Cloud-button" onClick={ () => {
                    if (showSoundDialog) setShowSoundDialog(false);
                    else {
                        setShowSoundDialog(true);
                        setShowMinuteDialog(false);
                        setShowBellDialog(false);
                    }
                }}>
                 <IconContext.Provider
                    value={{ color: '#1989AC', size: '2.4rem', className: 'Sound-logo option' }}
                    >
                    <div>
                    <AiFillSound/>
                    </div>
                    </IconContext.Provider>
                </button>
            </div>
            {showMinuteDialog ? <MinutesDialog showMinuteDialog={setShowMinuteDialog} setMinutes={props.setMins}
                            mins={props.mins} setTimeVisible={props.setTimeVisible} setButtonVisible={props.setButtonVisible} setMeditationComplete={props.setMeditationComplete}/> : null}
            {showBellDialog ? <BellDialog showBellDialog={setShowBellDialog} setBellVolume={props.setBellVolume} setBell={props.setBell}
                            bell={props.bell} bellVolume={props.bellVolume}/> : null}
            {showSoundDialog ? <SoundDialog showSoundDialog={setShowSoundDialog} setSoundVolume={props.setSoundVolume} setSound={props.setSound} sound={props.sound} soundVolume={props.soundVolume}/> : null}
        </main>
    )
}

export default Options;