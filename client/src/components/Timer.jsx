import { useEffect, useState } from "react";

// Shows the time to meditate and counts down accordingly when meditations has started
const Timer = (props) => {
    return (
        <div className="Timer">
            <p className="TimeView"> {props.time} </p>
        </div>
    )
}

export default Timer;