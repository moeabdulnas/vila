import "./SoundDialog.css";
import { WiRain, WiThunderstorm, WiCloudyGusts } from "react-icons/wi"; // Wind probably not needed
import { BsMusicNote } from "react-icons/bs"; // Probably not needed
import { MdForest } from "react-icons/md";
import rain from '../../assets/sounds/rain.mp3';
import thunder from '../../assets/sounds/thunder.mp3';
import forest from '../../assets/sounds/forest.mp3';


const SoundDialog = (props) => {
    return (
        props.showSoundDialog ? (
            <div>
                <dialog className='SoundOption' open>
                    <p className='SoundParagraph'>sound</p>
                    <WiRain className='Rain' onClick={
                        (e) => {
                            if (props.sound) {
                                props.sound.pause();
                                props.sound.currentTime = 0;
                            }
                            props.setSound(new Audio(rain));
                            e.preventDefault();
                        }
                    }/>
                    <WiThunderstorm className='Thunder' onClick={
                        (e) => {
                            if (props.sound) {
                                props.sound.pause();
                                props.sound.currentTime = 0;
                            }
                            props.setSound(new Audio(thunder));
                            e.preventDefault();
                        }
                    }/>
                    <MdForest className='Forest' onClick={
                        (e) => {
                            if (props.sound) {
                                props.sound.pause();
                                props.sound.currentTime = 0;
                            }
                            props.setSound(new Audio(forest));
                            e.preventDefault();
                        }
                    }/>
                    <p className='SoundParagraph'>volume</p>
                    <div className='Stepper'>
                        <button className='Minus Step' onClick={
                                (e) => {
                                    if (props.soundVolume > 1) props.setSoundVolume(props.soundVolume - 1);
                                    e.preventDefault();
                                }
                            }>-</button>
                            <input
                                type='number' className='SoundVolume'
                                value={props.soundVolume} min='1' max='10' step='1' readOnly disabled
                            />
                            <button className='Plus Step' onClick={
                                (e) => {
                                    if (props.soundVolume < 10) props.setSoundVolume(props.soundVolume + 1);             
                                    e.preventDefault();
                                }
                            }>+</button>
                    </div>
                    <form method="dialog">
                            <button className='Ok' onClick={(e) => {
                                    props.showSoundDialog(false);
                                    e.preventDefault();
                                }
                                }>OK</button>
                            </form>
                </dialog>
            </div>
        ) : null
    );
}

export default SoundDialog;