import {state} from "../state.js";
import {IoMoon, IoSunny} from "react-icons/io5";
import {useSnapshot} from "valtio";
import React from "react";

let icon = <IoSunny/>;


const DarkmodeToggle = () => {

    const snap = useSnapshot(state);

    const onButtonClick = (bool) => {
        if (bool === true) {
            icon = <IoSunny/>;
        } else {
            icon = <IoMoon/>;
        }
        state.darkToggle = bool;


    }
    if (snap.darkToggle) {
        return (
            <div className="darktoggle-backround">

                <button onClick={() => onButtonClick(!snap.darkToggle)} className="darktoggle-circle">
                    {icon}
                </button>
            </div>
        );
    } else {
        return (
            <div className="darktoggle-backround">

                <button onClick={() => onButtonClick(!snap.darkToggle)} className="darktoggle-circle translate-x-8">
                    {icon}
                </button>
            </div>
        );
    }


}

export default DarkmodeToggle;