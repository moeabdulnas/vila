import { useEffect, useState } from "react";
import bell from "../assets/images/bell.png";
import cloud from "../assets/images/cloud.png";
import sand from "../assets/images/sand.png";
import "./Options.css";

const Options = (props) => {
    return (
        <div className="Options">
            {/* TODO: Set hover effect*/}
            <button className="Sand-button" onClick={
                () => {
                    props.showProp.current.showModal();
                }
            }>
                <img src={sand} className="Sand-logo option" alt="bell" />
            </button>
            <button className="Bell-button">
                <img src={bell} className="Bell-logo option" alt="bell" />
            </button>
            <button className="Cloud-button">
                <img src={cloud} className="Cloud-logo option" alt="bell" />
            </button>
        </div>
    )
}

export default Options;