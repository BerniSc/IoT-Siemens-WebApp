import logo from './logo.svg'
import DarkmodeToggle from "./darkmode";
import {IoAddCircleOutline, IoCloseCircleOutline} from "react-icons/io5";
import {useSnapshot} from "valtio";
import React from "react"
import {state} from '../state.js'
import Battery from "./battery";


let icon =  <IoCloseCircleOutline/>;
let charge = 34


export default function TopBar(props)
{
    const snap = useSnapshot(state);

    const onButtonClick=(bool)=> {

        if (bool === false) {
            icon = <IoCloseCircleOutline/>;
        } else {
            icon = <IoAddCircleOutline/>;
        }
        state.sbExtended = bool;


    }

    return (
        <div className="top-bar">
            <button onClick={()=>onButtonClick(!snap.sbExtended)}  className="top-button">
                {icon}
            </button>



            <div className="w-96 h-7 items-center justify-end unselectable flex flex-row">

                    <Battery socket={props.socket} className="shadow-sm"/>


                <DarkmodeToggle/>
                <img src={logo} alt="Logo" className="unselectable pl-4 w-40 h-7"/>
            </div>
        </div>
    );
}

