import { useEffect, useState } from "react";
import bell from "../assets/images/bell.png";
import cloud from "../assets/images/cloud.png";
import sand from "../assets/images/sand.png";
import "./Options.css";

const Options = () => {
    return (
        <div className="Options">
            {/* TODO: Set hover effect*/}
            <button type="Sand-button">
                <img src={sand} className="Sand-logo" alt="bell" />
            </button>
            <button type="Bell-button">
                <img src={bell} className="Bell-logo" alt="bell" />
            </button>
            <button type="Cloud-button">
                <img src={cloud} className="Cloud-logo" alt="bell" />
            </button>
        </div>
    )
}

export default Options;