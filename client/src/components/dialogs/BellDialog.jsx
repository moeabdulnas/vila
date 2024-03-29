import './BellDialog.css';
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
import bell1 from '../../assets/sounds/bell1.mp3';
import bell2 from '../../assets/sounds/bell2.mp3';
import bell3 from '../../assets/sounds/bell3.mp3';
const BellDialog = (props) => {
    return (
        props.showBellDialog ? (
            <div>
                <dialog className='BellDialog' open>
                <div className='BellDialogContainer'>
                    <p className='BellParagraph'>bell</p>
                    <div className='BellOptions'>
                        <TbNumber1 className='Bell1' onClick={
                            (e) => {
                                props.setBell(new Audio(bell1));
                                e.preventDefault();
                            }
                        }/>
                        <TbNumber2 className='Bell2' onClick={
                            (e) => {
                                props.setBell(new Audio(bell2));
                                e.preventDefault();
                            }
                        }/>
                        <TbNumber3 className='Bell3' onClick={
                            (e) => {
                                props.setBell(new Audio(bell3));
                                e.preventDefault();
                            }
                        }/>
                    </div>
                    <p className='BellParagraph'>volume</p>

                    <div className='Stepper'>     
                        <button className='Minus Step' onClick={
                                (e) => {
                                    if (props.bellVolume > 1) props.setBellVolume(props.bellVolume - 1);
                                    e.preventDefault();
                                }
                            }>-</button>
                            <input
                                type='number' className='BellVolume'
                                value={props.bellVolume} min='1' max='10' step='1' readOnly disabled
                            />
                            <button className='Plus Step' onClick={
                                (e) => {
                                    if (props.bellVolume < 10) props.setBellVolume(props.bellVolume + 1);             
                                    e.preventDefault();
                                }
                            }>+</button>
                    </div>
                        <form method="dialog">
                        <button className='Ok' onClick={(e) => {
                                props.showBellDialog(false);
                                if (props.bell) {
                                    props.bell.pause();
                                    props.bell.currentTime = 0;
                                }
                                e.preventDefault();
                            }
                            }>OK</button>
                        </form>
                    </div>
                </dialog>
            </div>
        ) : null
    );
}

export default BellDialog;